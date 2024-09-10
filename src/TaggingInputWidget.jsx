import { Component, createElement } from "react";

import TaggingInputWidget from "./components/TaggingInputContainer";
import "./ui/TaggingInputWidget.css";

export default class MentionInputWidget extends Component {
    onEnterHandler = this.onEnter.bind(this);

    render() {
        const {
            placeholder,
            renderMode,
            valueAttribute,
            datasource,
            suggestionContent,
            objLabel,
            maxSuggestions,
            tagTrigger,
            keepTriggerSymbol,
            allowSuggestionsAboveCursor,
            allowSpaceInQuery,
            emojiEnabled,
            emojiPickerTheme,
            emojiTopbarColor,
            autoFocusSearch,
            autoConvertEmoji,
            onLeaveAction,
            onChangeAction,
            onAddTagAction,
            onRemoveTagAction
        } = this.props;
        return (
            <TaggingInputWidget
                placeholder={placeholder}
                renderMode={renderMode}
                valueAttribute={valueAttribute}
                datasource={datasource}
                suggestionContent={suggestionContent}
                objLabel={objLabel}
                maxSuggestions={maxSuggestions}
                tagTrigger={tagTrigger}
                keepTriggerSymbol={keepTriggerSymbol}
                allowSuggestionsAboveCursor={allowSuggestionsAboveCursor}
                allowSpaceInQuery={allowSpaceInQuery}
                emojiEnabled={emojiEnabled}
                emojiPickerTheme={emojiPickerTheme}
                emojiTopbarColor={emojiTopbarColor}
                autoFocusSearch={autoFocusSearch}
                autoConvertEmoji={autoConvertEmoji}
                onEnterAction={this.onEnterHandler}
                onLeaveAction={onLeaveAction}
                onChangeAction={onChangeAction}
                onAddTagAction={onAddTagAction}
                onRemoveTagAction={onRemoveTagAction}
            />
        );
    }

    onEnter() {
        if (this.props.onEnterAction && this.props.onEnterAction.canExecute) {
            this.props.onEnterAction.execute();
        }
    }
}
