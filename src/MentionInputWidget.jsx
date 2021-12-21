import { Component, createElement } from "react";
import "./ui/MentionInputWidget.css";

import { MentionsInput, Mention } from 'react-mentions'
//import defaultStyle from "./ui/defaultStyle";
import defaultMentionStyle from "./ui/defaultMentionStyle";
import defaultStyle from "./ui/defaultStyle";

export default class MentionInputWidget extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ready: false,
            value: '',
        };

        this.onChangeHandler = this.onChange.bind(this);
    }

    componentDidMount() {
        // once props have been loaded update the state
        this.setState({ ready: true, value: this.props.valueAttribute.value });
    }

    onAdd = () => {
        console.log('added a new mention');
    }

    onChangeValue = (event, newValue, newPlainTextValue, mentions) => {
        this.setState({ value: newValue });
        this.props.valueAttribute.value = newValue;
    }


    render() {
        const users = [
            {
                id: 'walter',
                display: 'Walter White',
            },
            {
                id: 'jesse',
                display: 'Jesse Pinkman',
            },
            {
                id: 'gus',
                display: 'Gustavo "Gus" Fring',
            },
            {
                id: 'saul',
                display: 'Saul Goodman',
            },
            {
                id: 'hank',
                display: 'Hank Schrader',
            },
            {
                id: 'skyler',
                display: 'Skyler White',
            },
            {
                id: 'mike',
                display: 'Mike Ehrmantraut',
            },
            {
                id: 'lydia',
                display: 'Lydìã Rôdarté-Qüayle',
            },
        ]

        if (this.state.ready) {
            return (
                <div className="mentionInputWidget">
                    <MentionsInput
                        value={this.state.value}
                        onChange={this.onChangeValue}
                        placeholder={"Mention people using '@'"}
                        a11ySuggestionsListLabel={"Suggested mentions"}
                        style={defaultStyle}
                    >
                        <Mention
                            markup="@[__display__](user:__id__)"
                            trigger="@"
                            data={users}
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
                            onAdd={this.onAdd}
                            style={defaultMentionStyle}
                        />
                    </MentionsInput>
                </div>
            );
        } else {
            return (
                <div></div>
            );
        };
    };

    onChange() {
        if (this.props.onChangeAction && this.props.onChangeAction.canExecute) {
            this.props.onChangeAction.execute();
        }
    }
}
