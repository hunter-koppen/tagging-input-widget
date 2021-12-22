import React, { Component, createElement } from "react";
import ReactDOM from 'react-dom';
import editorStyles from "./ui/MentionInputWidget.css";

import Editor from '@draft-js-plugins/editor';
import createMentionPlugin, {
    defaultSuggestionsFilter,
} from '@draft-js-plugins/mention';
import { EditorState } from 'draft-js';

import mentions from "./mentions";
import '@draft-js-plugins/mention/lib/plugin.css';

export default class MentionInputWidget extends Component {
    constructor(props) {
        super(props);

        this.state = {
            ready: false,
            value: '',
            editorState: null,
            open: false,
            suggestions: mentions
        };

        this.nodeRef = React.createRef();
        this.onChangeHandler = this.onChange.bind(this);
    }

    componentDidMount() {
        // Once props have been loaded update the state
        this.setState({
            ready: true,
            value: this.props.valueAttribute.value,
            editorState: EditorState.createEmpty()
        });
    }

    onAdd = () => {
        console.log('added a new mention');
    }

    onChange = editorState => {
        console.log('onchangefired-' + editorState);
        this.setState({ editorState });
    };

    onOpenChange = _open => {
        console.log('onopenchangefired-' + _open);
        this.setState({ open: _open });
    };

    onSearchChange = ({ value }) => {
        console.log('onsearchchangefired-' + value);
        this.setState({
            suggestions: defaultSuggestionsFilter(value, mentions)
        });
    };

    render() {
        const mentionPlugin = createMentionPlugin();
        const { MentionSuggestions } = mentionPlugin;
        const plugins = [mentionPlugin];

        if (this.state.ready) {
            return (
                <div
                    //className={editorStyles.m6zwb4v}
                >
                    <Editor
                        //placeholder="Write a comment..."
                        editorState={this.state.editorState}
                        onChange={this.onChange}
                        plugins={plugins}
                        ref={this.nodeRef}
                    />
                    <MentionSuggestions
                        //open={this.state.open}
                        //onOpenChange={this.onOpenChange}
                        suggestions={this.state.suggestions}
                        onSearchChange={this.onSearchChange}
                        //onAddMention={this.onAdd}
                    />
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
