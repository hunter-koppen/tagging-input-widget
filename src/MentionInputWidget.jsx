import { Component, createElement } from "react";
import classNames from "./ui/MentionInputWidget.css";

import { MentionsInput, Mention } from 'react-mentions'

export default class MentionInputWidget extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ready: false,
            value: '',
            data: ''
        };

        this.placeholder = '';
        this.onMentionHandler = this.onMention.bind(this);
    }

    componentDidMount() {
        this.placeholder = this.props.placeholder.value;
        this.setState({ ready: true });
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
        console.log('mentiondata=' + JSON.stringify(data));
        this.setState({
            data: data
        });
    }

    onChangeValue = (event, newValue, newPlainTextValue, mentions) => {
        // When user changes the input of the text area we have to update the state and the actual Mendix value.
        this.setState({
            value: newValue,
        });
        this.props.valueAttribute.setValue(newValue)
    }

    onMention(mention) {
        console.log('mentionadded=' + JSON.stringify(mention));
        // When someone is mentioned in the textarea we want to fire an action so the developer can control themselves what they want to do with it.
        if (this.props.onMentionAction && mention) {
            const mxObject = this.props.datasource.items.find((mxObject) => {
                return mxObject.id == mention;
            })
            this.props.onMentionAction(mxObject).execute();
        }
    }


    render() {
        if (this.state.ready) {
            return (
                <MentionsInput
                    value={this.state.value}
                    onChange={this.onChangeValue}
                    placeholder={this.placeholder}
                    className="mentions"
                >
                    <Mention
                        markup="@__display__"
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
                        onAdd={this.onMentionHandler}
                        className="mentions__mention"
                    />
                </MentionsInput>
            );
        } else {
            return (
                <div></div>
            );
        }
    }
}
