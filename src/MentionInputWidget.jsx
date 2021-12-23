import React, { Component, createElement } from "react";
import classNames from "./ui/MentionInputWidget.css";

import { MentionsInput, Mention } from 'react-mentions'

export default class MentionInputWidget extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            data: '',
            mentions: []
        };

        this.placeholder = '';
        this.nodeRef = React.createRef();
        this.onAddMentionHandler = this.onAddMention.bind(this);
    }

    componentDidMount() {
        this.placeholder = this.props.placeholder.value;

        // We have to add some standard mendix classes to the rendered divs so they automatically look correct based on custom styles already existing
        const mentionInput = this.nodeRef.current.querySelectorAll('.mentions__input');
        const mentionHighlighter = this.nodeRef.current.querySelectorAll('.mentions__highlighter');
        const mentionControl = this.nodeRef.current.querySelectorAll('.mentions__control');
        mentionInput[0].classList.add('form-control', 'mx-textarea-input');
        mentionHighlighter[0].classList.add('form-control');
        mentionControl[0].classList.add('mx-textarea', 'form-group');
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
        // valueAttribute changed
        else if (prevProps.valueAttribute.value !== this.props.valueAttribute.value) {
            this.setState({ value: this.props.valueAttribute.value })
        }
        // datasource is loaded so we can create the mentionslist
        else if (prevProps.datasource.status == 'loading' && this.props.datasource.status == 'available') {
            this.loadData();
        }
    }

    loadData = () => {
        // Function for loading the list of object into the mention suggestions.
        console.debug('loadData');
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

        // When user changes the input of the text area we have to update the state and the actual Mendix value.
        this.setState({
            value: newValue,
            mentions: mentions
        });
        this.props.valueAttribute.setValue(newValue)
    }

    onAddMention(mention) {
        //console.log('addedMention=' + JSON.stringify(mention));
        // When someone is mentioned in the textarea we want to fire an action so the developer can control themselves what they want to do with it.
        if (this.props.onAddMentionAction && mention) {
            //console.log('datasourceitems=' + JSON.stringify(this.props.datasource.items));
            const mxObject = this.props.datasource.items.find((mxObject) => {
                return mxObject.id == mention;
            })
            //console.log('addedMentionObject=' + JSON.stringify(mxObject));
            if (mxObject && mxObject.id != null) {
                this.props.onAddMentionAction(mxObject).execute();
            }
        }
    }

    onRemoveMention(mentions) {
        const prevMentions = this.state.mentions
        const currentMentions = mentions
        //console.log('prevMentions=' + JSON.stringify(prevMentions));
        //console.log('currentMentions=' + JSON.stringify(currentMentions));

        var removedMention = prevMentions.filter(mention => {
            return !Boolean(currentMentions.find(newMention => newMention.id == mention.id))
        }).map(mention => {
            return { id: mention.id }
        })

        //console.log('removedMention=' + JSON.stringify(removedMention));
        // Call onRemove
        if (removedMention && removedMention.length > 0 && this.props.onRemoveMentionAction) {
            const mxObject = this.props.datasource.items.find((mxObject) => {
                return mxObject.id == removedMention[0].id;
            })
            if (mxObject && mxObject.id != null) {
                //console.log('removedMentionObject=' + JSON.stringify(mxObject));
                this.props.onRemoveMentionAction(mxObject).execute();
            }
        }
    }

    render() {
        return (
            <div ref={this.nodeRef}>
                <MentionsInput
                    value={this.state.value}
                    onChange={this.onChangeValue}
                    placeholder={this.placeholder}
                    className="mentions"
                >
                    <Mention
                        trigger="@"
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
            </div>
        );
    }
}
