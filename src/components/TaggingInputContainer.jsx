import React, { Component, createElement } from "react";
import { Alert } from "./Alert";
import "../ui/TaggingInputWidget.css";

import { Mention, MentionsInput } from "react-mentions";

import Picker from "@emoji-mart/react";
import { SearchIndex, init } from "emoji-mart";
import emojidata from "../data/emojis";

init({ emojidata });

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

    placeholder = "";
    nodeRef = React.createRef();
    emojiRef = React.createRef();
    handleClickOutsideHandler = this.handleClickOutside.bind(this);
    onAddTagHandler = this.onAddTag.bind(this);
    onAddEmojiHandler = this.onAddEmoji.bind(this);
    onLeaveHandler = this.onLeave.bind(this);

    componentDidMount() {
        this.placeholder = this.props.placeholder ? this.props.placeholder.value : "";

        // We have to add some standard mendix classes to the rendered divs so they automatically look correct based on custom styles already existing
        const mentionControl = this.nodeRef.current.querySelectorAll(".mentions__control");
        mentionControl[0].classList.add("form-group");

        document.addEventListener("mousedown", this.handleClickOutsideHandler, false);
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
        // ValueAttribute changed
        if (
            prevProps.valueAttribute.value !== this.props.valueAttribute.value ||
            this.props.valueAttribute.value !== this.state.value
        ) {
            this.setState({ value: this.props.valueAttribute.value });
            if (this.props.valueAttribute.value !== this.state.editedValue) {
                this.setState({ initialValue: this.props.valueAttribute.value });
            }
        }
        // set validation
        if (prevProps.valueAttribute.validation !== this.props.valueAttribute.validation) {
            this.setState({ validationFeedback: this.props.valueAttribute.validation });
        }
        // datasource is loaded so we can create the mentionslist
        if (
            this.state.readOnly === false &&
            prevProps.datasource.status === "loading" &&
            this.props.datasource.status === "available"
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
        const maxLength = this.props.maxSuggestions;
        const filteredMentions = this.state.data.filter(obj => obj.display.toLowerCase().includes(query.toLowerCase()));
        if (filteredMentions.length > maxLength) {
            return filteredMentions.slice(0, maxLength);
        } else {
            return filteredMentions;
        }
    };

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
                if (mxObjectToRemove && mxObjectToRemove.id != null) {
                    this.props.onRemoveTagAction.get(mxObjectToRemove).execute();
                }
            });
        }
    }

    convertTextToEmojis = async text => {
        const colonsRegex = /(^|\s):([)|D|(|P|O|o])+/g;
        const match = colonsRegex.exec(text);

        if (match) {
            const emojiSearch = await this.getEmoji(":" + match[2]);
            if (emojiSearch.length > 0) {
                const newText = text.replace(match[0], emojiSearch[0].skins[0].native);
                this.setState({ value: newText });
                this.props.valueAttribute.setValue(newText);
            }
        }
    };

    getEmoji = async value => await SearchIndex.search(value); // eslint-disable-line

    onAddEmoji(emoji) {
        const newValue = this.state.value + emoji.native;
        this.setState({
            showEmojis: false,
            value: newValue
        });
        this.props.valueAttribute.setValue(newValue);
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
                        placeholder={this.placeholder}
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
                        <button className={"emoji__button"} onClick={() => this.setState({ showEmojis: true })}>
                            {String.fromCodePoint(0x1f642)}
                        </button>
                    ) : null}
                    <Alert
                        bootstrapStyle={"danger"}
                        message={this.state.validationFeedback}
                        className={"mx-validation-message"}
                    >
                        {this.state.validationFeedback}
                    </Alert>
                </div>
            );
        }
    }
}
