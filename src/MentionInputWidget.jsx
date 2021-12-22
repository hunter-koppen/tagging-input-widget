import { Component, createElement } from "react";
import "./ui/MentionInputWidget.css";
//import classNames from "classnames";

import Editor from '@draft-js-plugins/editor';
import createMentionPlugin, {
    defaultSuggestionsFilter,
} from '@draft-js-plugins/mention';
import { EditorState } from 'draft-js';

export default class MentionInputWidget extends Component {
    constructor(props) {
        super(props);

        this.state = {
            ready: false,
            value: '',
            editorState: null,
            open: false,
            data: null
        };

        //this.nodeRef = React.createRef();
        this.onChangeHandler = this.onChange.bind(this);
    }

    componentDidMount() {
        // Once props have been loaded update the state
        // const users = [
        //     {
        //         name: 'Matthew Russell',
        //         link: 'https://twitter.com/mrussell247',
        //         avatar: 'https://pbs.twimg.com/profile_images/517863945/mattsailing_400x400.jpg',
        //     },
        //     {
        //         name: 'Julian Krispel-Samsel',
        //         link: 'https://twitter.com/juliandoesstuff',
        //         avatar: 'https://avatars2.githubusercontent.com/u/1188186?v=3&s=400',
        //     },
        //     {
        //         name: 'Jyoti Puri',
        //         link: 'https://twitter.com/jyopur',
        //         avatar: 'https://avatars0.githubusercontent.com/u/2182307?v=3&s=400',
        //     },
        //     {
        //         name: 'Max Stoiber',
        //         link: 'https://twitter.com/mxstbr',
        //         avatar: 'https://avatars0.githubusercontent.com/u/7525670?s=200&v=4',
        //     },
        //     {
        //         name: 'Nik Graf',
        //         link: 'https://twitter.com/nikgraf',
        //         avatar: 'https://avatars0.githubusercontent.com/u/223045?v=3&s=400',
        //     },
        //     {
        //         name: 'Pascal Brandt',
        //         link: 'https://twitter.com/psbrandt',
        //         avatar: 'https://pbs.twimg.com/profile_images/688487813025640448/E6O6I011_400x400.png',
        //     },
        // ]; 

        this.setState({ 
            ready: true, 
            value: this.props.valueAttribute.value,
            editorState: EditorState.createEmpty()
            //data: users
        });
    }

    // onAdd = () => {
    //     console.log('added a new mention');
    // }

    onChange = editorState => {
        this.setState({ editorState });
    };

    // onOpenChange = _open => {
    //     this.setState({ open: _open });
    // };

    // onSearchChange = value => {
    //     setSuggestions(defaultSuggestionsFilter(value, users));
    // };

    render() {
        const mentionPlugin = createMentionPlugin();
        //const { MentionSuggestions } = mentionPlugin;
        const plugins = [mentionPlugin];

        if (this.state.ready) {
            return (
                <div
                //className={editorStyles.editor}
                //onClick={() => { ref.current.focus(); }}
                >
                    <Editor
                        editorState={this.state.editorState}
                        onChange={this.onChange}
                        plugins={plugins}
                        //ref={this.nodeRef}
                    />
                    {/* <MentionSuggestions
                        open={this.state.open}
                        onOpenChange={this.onOpenChange}
                        suggestions={this.state.data}
                        onSearchChange={this.onSearchChange}
                        onAddMention={this.onAdd}
                    /> */}
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
