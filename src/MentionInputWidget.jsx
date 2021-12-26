import ReactDOM from "react-dom"
import React, { Component, createElement } from "react";
import "./ui/MentionInputWidget.css";

// react mentions library
import { MentionsInput, Mention } from 'react-mentions'

// emoji mart library
import NimblePicker from 'emoji-mart/dist-es/components/picker/nimble-picker'
import NimbleEmojiIndex from 'emoji-mart/dist-es/utils/emoji-index/nimble-emoji-index.js'
import "emoji-mart/css/emoji-mart.css";

import data from './data/google';
export default class MentionInputWidget extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            data: '',
            mentions: [],
            showEmojis: false,
            readOnly: false,
            mentionHighlighter: null
        };

        this.placeholder = '';
        this.nodeRef = React.createRef();
        this.emojiRef = React.createRef();
        this.handleClickOutside = this.handleClickOutside.bind(this);
        this.onAddMentionHandler = this.onAddMention.bind(this);
        this.onAddEmojiHandler = this.onAddEmoji.bind(this);
    }

    componentDidMount() {
        this.placeholder = this.props.placeholder.value;

        // We have to add some standard mendix classes to the rendered divs so they automatically look correct based on custom styles already existing
        const mentionControl = this.nodeRef.current.querySelectorAll('.mentions__control');
        mentionControl[0].classList.add('form-group');

        document.addEventListener('mousedown', this.handleClickOutside, false);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside, false);
    }

    componentDidUpdate(prevProps) {
        // nothing changed
        if (prevProps && prevProps == this.props) {
            return;
        }
        // props are still empty
        else if (!(this.props) && !(prevProps)) {
            return;
        }
        else {
            // check if widget is readonly
            if (prevProps.valueAttribute.status == 'loading' && this.props.valueAttribute.status == 'available') {
                this.checkReadOnly();
            }
            // valueAttribute changed
            if (prevProps.valueAttribute.value !== this.props.valueAttribute.value) {
                this.setState({ value: this.props.valueAttribute.value })
            }
            // datasource is loaded so we can create the mentionslist
            if (this.state.readOnly == false && prevProps.datasource.status == 'loading' && this.props.datasource.status == 'available') {
                this.loadData();
            }
        }
    }

    checkReadOnly() {
        const mentionHighlighter = this.nodeRef.current.querySelectorAll('.mentions__highlighter')[0];
        const mentionInput = this.nodeRef.current.querySelectorAll('.mentions__input')[0];
        if (this.props.valueAttribute.readOnly) {
            this.setState({ readOnly: true });
            mentionHighlighter.classList.add('form-control-static');
            mentionInput.classList.add('form-control-static', 'mx-textarea-input');
        } else {
            mentionHighlighter.classList.add('form-control');
            mentionInput.classList.add('form-control', 'mx-textarea-input');
        }
    }

    loadData() {
        // Function for loading the list of object into the mention suggestions.
        console.debug('loadDataStarted');
        let data = [];
        this.props.datasource.items.map(mxObject => {
            const objLabel = this.props.objLabel.get(mxObject).value;
            const objImageUrl = this.props.objImageUrl ? this.props.objImageUrl.get(mxObject).value : '';

            const mentionObj =
            {
                id: mxObject.id,
                display: objLabel,
                imgUrl: objImageUrl
            }
            data.push(mentionObj);
        })
        console.debug('mentiondata=' + JSON.stringify(data));
        this.setState({
            data: data
        });
    }

    onChangeValue = (event, newValue, newPlainTextValue, mentions) => {
        // Check for removed mentions
        if (this.state.mentions && this.state.mentions.length > 0 && mentions && JSON.stringify(this.state.mentions) !== JSON.stringify(mentions)) {
            this.onRemoveMention(mentions);
        }

        // check for smileys typed in the text so we can automatically convert them:
        if (newValue && newValue.length > 0 && this.props.autoConvertEmoji && this.props.emojiEnabled) {
            newValue = this.convertTextToEmojis(newValue);
        }

        // When user changes the input of the text area we have to update the state and the actual Mendix value.
        this.setState({
            value: newValue,
            mentions: mentions
        });
        this.props.valueAttribute.setValue(newValue)
    }

    onAddMention(mention) {
        console.debug('addedMention=' + JSON.stringify(mention));
        // When someone is mentioned in the textarea we want to fire an action so the developer can control themselves what they want to do with it.
        if (this.props.onAddMentionAction && mention) {
            const mxObject = this.props.datasource.items.find((mxObject) => {
                return mxObject.id == mention;
            })
            if (mxObject && mxObject.id != null) {
                console.log('mxObject='+JSON.stringify(mxObject));
                const test = this.props.datasource.items[0];
                this.props.onAddMentionAction(test).execute();
            }
        }
    }

    onRemoveMention(mentions) {
        const prevMentions = this.state.mentions
        const currentMentions = mentions

        var removedMention = prevMentions.filter(mention => {
            return !Boolean(currentMentions.find(newMention => newMention.id == mention.id))
        }).map(mention => {
            return { id: mention.id }
        })

        // Call onRemove
        if (removedMention && removedMention.length > 0 && this.props.onRemoveMentionAction) {
            console.debug('removedMention=' + JSON.stringify(removedMention));
            const mxObject = this.props.datasource.items.find((mxObject) => {
                return mxObject.id == removedMention[0].id;
            })
            if (mxObject && mxObject.id != null) {
                this.props.onRemoveMentionAction(mxObject).execute();
            }
        }
    }

    convertTextToEmojis = (text) => {
        const colonsRegex = new RegExp("(^|\\s):([)|D|(|P|O|o])+", "g");
        let newText = text;

        let match = colonsRegex.exec(text);

        if (match !== null) {
            let colons = match[2];
            let offset = match.index + match[1].length;

            newText = newText.slice(0, offset) + this.getEmoji(colons) + newText.slice(offset + 2);
        }
        return newText;
    }

    getEmoji = (emoji) => {
        let emoj;
        let emojiIndex = new NimbleEmojiIndex(data);
        switch (emoji) {
            case "D":
                emoj = emojiIndex.search(":)")[1].native;
                break;
            case ")":
                emoj = emojiIndex.search(":)")[0].native;
                break;
            case "(":
                emoj = emojiIndex.search(":(")[0].native;
                break;
            case "P":
                emoj = emojiIndex.search(":P")[0].native;
                break;
            case "o":
                emoj = emojiIndex.search("Hushed")[0].native;
                break;
            case "O":
                emoj = emojiIndex.search("Hushed")[0].native;
                break;
            default:
                emoj = "";
        }
        return emoj;
    }

    onAddEmoji(emoji) {
        console.debug('addedemoji=' + JSON.stringify(emoji));
        const newValue = this.state.value + emoji.native
        this.setState({
            showEmojis: false,
            value: newValue,
        });
        this.props.valueAttribute.setValue(newValue)
    }

    handleClickOutside(event) {
        let node = ReactDOM.findDOMNode(this.emojiRef.current);
        if (node && !node.contains(event.target)) {
            this.setState({ showEmojis: false });
        }
    }

    render() {
        // check rendermode
        let singleLine = false
        if (this.props.renderMode == 'textbox') {
            singleLine = true
        }

        if (this.state.readOnly) {
            return (
                <div ref={this.nodeRef} className="mentionsReadOnly">
                    <MentionsInput
                        value={this.state.value}
                        singleLine={singleLine}
                        className="mentions"
                    >
                        <Mention
                            className="mentions__mention"
                        />
                    </MentionsInput>
                </div>
            );
        } else {
            return (
                <div ref={this.nodeRef} style={{ position: "relative" }}>
                    <MentionsInput
                        value={this.state.value}
                        singleLine={singleLine}
                        onChange={this.onChangeValue}
                        placeholder={this.placeholder}
                        className="mentions"
                        allowSuggestionsAboveCursor={this.props.allowSuggestionsAboveCursor}
                    >
                        <Mention
                            trigger={this.props.mentionTrigger}
                            data={this.state.data}
                            renderSuggestion={(
                                suggestion,
                                search,
                                highlightedDisplay,
                                index,
                                focused
                            ) => (
                                <div className={`user ${focused ? 'focused' : ''}`}>
                                    {highlightedDisplay}
                                </div>
                            )}
                            onAdd={this.onAddMentionHandler}
                            className="mentions__mention"
                        />
                    </MentionsInput>
                    {this.state.showEmojis ? (
                        <span className={'emoji__picker'}>
                            <NimblePicker
                                onSelect={this.onAddEmojiHandler}
                                showSkinTones={false}
                                sheetSize={32}
                                data={data}
                                ref={this.emojiRef}
                                showPreview={false}
                                native={true}
                                theme={this.props.emojiPickerTheme}
                                autoFocus={this.props.autoFocusSearch}
                                color={this.props.emojiTopbarColor}
                            />
                        </span>
                    ) : null}
                    {this.props.emojiEnabled ? (
                        <button
                            className={'emoji__button'}
                            onClick={() => this.setState({ showEmojis: true })}
                        >
                            {String.fromCodePoint(0x1f642)}
                        </button>
                    ) : null}
                </div>
            );
        }

    }
}
