import { Component, createElement } from "react";
import classNames from "./ui/MentionInputWidget.css";

import { MentionsInput, Mention } from 'react-mentions'

export default class MentionInputWidget extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ready: false,
            value: ''
        };

        this.placeholder = '';
        this.onChangeHandler = this.onChange.bind(this);
    }

    componentDidMount() {
        this.placeholder = this.props.placeholder.value;
        this.setState({
            ready: true
        });
    }

    componentDidUpdate(prevProps) {
        if(prevProps.valueAttribute.value && prevProps.valueAttribute.value == this.props.valueAttribute.value) {
            return;
        } else if(!(this.props.valueAttribute.value) && !(prevProps.valueAttribute.value)) {
            return;
        } else {
            this.setState({value: this.props.valueAttribute.value})
        }
    }

    onAdd = () => {
        console.log('added a new mention');
    }

    onChangeValue = (event, newValue, newPlainTextValue, mentions) => {
        this.setState({
            value: newValue,
        });
        this.props.valueAttribute.setValue(newValue)
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
                <MentionsInput
                    value={this.state.value}
                    onChange={this.onChangeValue}
                    placeholder={this.placeholder}
                    className="mentions"
                >
                    <Mention
                        markup="@__display__"
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
                        className="mentions__mention"
                    />
                </MentionsInput>
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
