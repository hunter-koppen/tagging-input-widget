import React, { Component, createElement } from "react";
import { Alert } from "./Alert";
import "../ui/TaggingInputWidget.css";

import { Mention, MentionsInput } from "react-mentions";

import Picker from "@emoji-mart/react";
import { SearchIndex, init } from "emoji-mart";
import emojidata from "../data/emojis";

init({ data: emojidata });

export default class TaggingInputWidget extends Component {
    state = {
        value: "",
        initialValue: "",
        editedValue: "",
        data: "",
        mentions: [],
        showEmojis: false,
        readOnly: false,
        readOnlyModeChecked: false,
        mentionHighlighter: null,
        validationFeedback: null
    };

    nodeRef = React.createRef();
    emojiRef = React.createRef();
    handleClickOutsideHandler = this.handleClickOutside.bind(this);
    onAddTagHandler = this.onAddTag.bind(this);
    onAddEmojiHandler = this.onAddEmoji.bind(this);
    onLeaveHandler = this.onLeave.bind(this);

    componentDidMount() {
        // We have to add some standard mendix classes to the rendered divs so they automatically look correct based on custom styles already existing
        const mentionControl = this.nodeRef.current.querySelectorAll(".mentions__control");
        mentionControl[0].classList.add("form-group");

        document.addEventListener("mousedown", this.handleClickOutsideHandler, false);

        // The attribute may already be available on first render (e.g. cached data) without ever
        // going through a loading -> available transition, so initialize from it here as well.
        if (this.props.valueAttribute.status === "available") {
            this.checkReadOnly();
            this.setState({
                value: this.props.valueAttribute.value,
                initialValue: this.props.valueAttribute.value
            });
        }
        // Same for the datasource: load the suggestions if it is already available on mount.
        if (!this.props.valueAttribute.readOnly && this.props.datasource.status === "available") {
            this.loadData();
        }
    }

    componentWillUnmount() {
        document.removeEventListener("mousedown", this.handleClickOutsideHandler, false);
    }

    componentDidUpdate(prevProps) {
        // Check if widget is readonly
        if (prevProps.valueAttribute.status === "loading" && this.props.valueAttribute.status === "available") {
            this.checkReadOnly();
        }
        if (
            this.props.valueAttribute.status === "available" &&
            this.props.valueAttribute.readOnly &&
            !this.state.readOnly
        ) {
            this.checkReadOnly();
        }
        // ValueAttribute changed externally (in Mendix). Only sync when the prop value actually
        // changed since the previous render - comparing against state.value would revert the input
        // to the stale prop value while typing, because setValue() updates the prop asynchronously.
        if (prevProps.valueAttribute.value !== this.props.valueAttribute.value) {
            const newValue = this.props.valueAttribute.value;
            this.setState({ value: newValue });
            if (newValue !== this.state.editedValue) {
                this.setState({ initialValue: newValue });
            }
        }
        // set validation
        if (prevProps.valueAttribute.validation !== this.props.valueAttribute.validation) {
            this.setState({ validationFeedback: this.props.valueAttribute.validation });
        }
        // (Re)load the suggestion list whenever the datasource items change - this covers the
        // initial loading -> available transition as well as later filter/refresh/list changes.
        if (
            this.state.readOnly === false &&
            this.props.datasource.status === "available" &&
            prevProps.datasource.items !== this.props.datasource.items
        ) {
            this.loadData();
        }
    }

    checkReadOnly() {
        const mentionHighlighter = this.nodeRef.current.querySelectorAll(".mentions__highlighter")[0];
        const mentionInput = this.nodeRef.current.querySelectorAll(".mentions__input")[0];
        if (this.props.valueAttribute.readOnly) {
            this.setState({ readOnly: true });
            mentionHighlighter.classList.add("form-control-static");
            mentionInput.classList.add("form-control-static", "mx-textarea-input");
        } else {
            mentionHighlighter.classList.add("form-control");
            mentionInput.classList.add("form-control", "mx-textarea-input");
        }
        this.setState({ readOnlyModeChecked: true });
    }

    loadData() {
        // Function for loading the list of object into the mention suggestions.
        const suggestionlist = [];
        this.props.datasource.items.forEach(mxObject => {
            const objLabel = this.props.objLabel.get(mxObject).value;
            const content = this.props.suggestionContent?.get(mxObject) ?? objLabel;
            const mentionObj = {
                id: mxObject.id,
                display: objLabel,
                content
            };
            suggestionlist.push(mentionObj);
        });
        this.setState({
            data: suggestionlist
        });
    }

    // eslint-disable-next-line
    onChangeValue = async (event, newValue, newPlainTextValue, mentions) => {
        function isChanged(oldMentions, newMentions) {
            return oldMentions && newMentions && JSON.stringify(oldMentions) !== JSON.stringify(newMentions);
        }
        // Check for removed mentions
        if (isChanged(this.state.mentions, mentions)) {
            this.onRemoveTag(mentions);
        }

        // When user changes the input of the text area we have to update the state and the actual Mendix value.
        this.props.valueAttribute.setValue(newValue);
        this.setState({
            value: newValue,
            editedValue: newValue,
            mentions
        });

        // check for smileys typed in the text so we can automatically convert them:
        if (this.props.autoConvertEmoji && this.props.emojiEnabled && newValue.includes(":")) {
            this.convertTextToEmojis(newValue);
        }
    };

    onLeave() {
        if (this.props.onLeaveAction && this.props.onLeaveAction.canExecute) {
            this.props.onLeaveAction.execute();
        }
        // check for on change action here
        if (this.props.onChangeAction && this.props.onChangeAction.canExecute) {
            if (this.state.value !== this.state.initialValue) {
                this.props.onChangeAction.execute();
            }
        }
        this.setState({ initialValue: this.state.value });
    }

    mentionTrigger = query => {
        const lowerQuery = query.toLowerCase();
        return this.state.data
            .filter(obj => obj.display.toLowerCase().includes(lowerQuery))
            .slice(0, this.props.maxSuggestions);
    };

    // Shared updater for value changes that don't originate from react-mentions onChange
    // (emoji insert / auto-convert), so state and the Mendix attribute stay in sync.
    applyValue(newValue) {
        this.setState({ value: newValue, editedValue: newValue });
        this.props.valueAttribute.setValue(newValue);
    }

    suggestionItem = (suggestion, search, highlightedDisplay, index, focused) => (
        <div className={`user ${focused ? "focused" : ""}`}>{suggestion.content}</div>
    );

    displayTransform = (id, display) => {
        if (this.props.keepTriggerSymbol) {
            return this.props.tagTrigger + display;
        }
        return display;
    };

    onAddTag(mention) {
        // When someone is mentioned in the textarea we want to fire an action so the developer can control themselves what they want to do with it.
        if (this.props.onAddTagAction && mention) {
            const mxObjectToAdd = this.props.datasource.items.find(mxObject => mxObject.id === mention);
            if (mxObjectToAdd) {
                this.props.onAddTagAction.get(mxObjectToAdd).execute();
            }
        }
    }

    onRemoveTag(mentions) {
        const prevMentions = this.state.mentions;
        const currentMentions = mentions;
        const removedMentions = prevMentions
            .filter(mention => !currentMentions.find(newMention => newMention.id === mention.id))
            .map(mention => ({ id: mention.id }));
        // Call onRemove
        if (removedMentions && removedMentions.length > 0 && this.props.onRemoveTagAction) {
            removedMentions.forEach(removedMention => {
                const mxObjectToRemove = this.props.datasource.items.find(
                    mxObject => mxObject.id === removedMention.id
                );
                if (mxObjectToRemove) {
                    this.props.onRemoveTagAction.get(mxObjectToRemove).execute();
                }
            });
        }
    }

    convertTextToEmojis = async text => {
        // Capture the leading boundary and the full smiley separately so we can preserve any
        // preceding whitespace and search on the complete smiley (e.g. ":D", ":)", ":P").
        const colonsRegex = /(^|\s)(:[)D(POo]+)/g;
        const match = colonsRegex.exec(text);

        if (match) {
            const [fullMatch, leading, smiley] = match;
            const emojiSearch = await this.getEmoji(smiley);
            if (emojiSearch.length > 0) {
                const newText = text.replace(fullMatch, leading + emojiSearch[0].skins[0].native);
                this.applyValue(newText);
            }
        }
    };

    getEmoji = async value => await SearchIndex.search(value); // eslint-disable-line

    onAddEmoji(emoji) {
        this.setState({ showEmojis: false });
        this.applyValue(this.state.value + emoji.native);
    }

    handleClickOutside(event) {
        if (this.emojiRef && !this.emojiRef.current?.contains(event.target)) {
            this.setState({ showEmojis: false });
        }
    }

    render() {
        const {
            renderMode,
            allowSpaceInQuery,
            allowSuggestionsAboveCursor,
            tagTrigger,
            autoFocusSearch,
            emojiPickerTheme,
            emojiEnabled,
            onEnterAction
        } = this.props;
        // check rendermode
        let singleLine = false;
        if (renderMode === "textbox") {
            singleLine = true;
        }
        // Read the placeholder on every render so a dynamic expression keeps working
        const placeholder = this.props.placeholder ? this.props.placeholder.value : "";

        if (this.state.readOnly || !this.state.readOnlyModeChecked) {
            return (
                <div ref={this.nodeRef} className="mx-widget-mentions mx-widget-mentions-readonly">
                    <MentionsInput value={this.state.value} singleLine={singleLine} className="mentions">
                        <Mention className="mentions__mention" displayTransform={this.displayTransform} />
                    </MentionsInput>
                </div>
            );
        } else {
            return (
                <div ref={this.nodeRef} className="mx-widget-mentions">
                    <MentionsInput
                        value={this.state.value}
                        singleLine={singleLine}
                        onChange={this.onChangeValue}
                        onBlur={this.onLeaveHandler}
                        onFocus={onEnterAction}
                        placeholder={placeholder}
                        allowSpaceInQuery={allowSpaceInQuery}
                        className="mentions"
                        allowSuggestionsAboveCursor={allowSuggestionsAboveCursor}
                    >
                        <Mention
                            trigger={tagTrigger}
                            data={this.mentionTrigger}
                            renderSuggestion={this.suggestionItem}
                            onAdd={this.onAddTagHandler}
                            className="mentions__mention"
                            displayTransform={this.displayTransform}
                        />
                    </MentionsInput>
                    {this.state.showEmojis ? (
                        <span ref={this.emojiRef} className={"emoji__picker"}>
                            <Picker
                                onEmojiSelect={this.onAddEmojiHandler}
                                data={emojidata}
                                theme={emojiPickerTheme}
                                autoFocus={autoFocusSearch}
                            />
                        </span>
                    ) : null}
                    {emojiEnabled ? (
                        <button
                            type="button"
                            aria-label="Open emoji picker"
                            className={"emoji__button"}
                            onClick={() => this.setState({ showEmojis: true })}
                        >
                            {String.fromCodePoint(0x1f642)}
                        </button>
                    ) : null}
                    <Alert
                        bootstrapStyle={"danger"}
                        message={this.state.validationFeedback}
                        className={"mx-validation-message"}
                    />
                </div>
            );
        }
    }
}
