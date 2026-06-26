// NOTE: This is a standalone, manual one-off script - it is NOT part of `npm run build`
// (which uses @mendix/pluggable-widgets-tools). Run it directly with rollup to regenerate
// `src/data/emojis.js` from a local `data.json` (the emoji-mart dataset, not committed) when
// you want to refresh the bundled emoji data.
import json from "@rollup/plugin-json";

export default args => {
    const result = [];
    // add json rollup plugin for importing emoji files
    result.push({
        input: "data.json",
        output: {
            file: "src/data/emojis.js",
            format: "cjs"
        },
        plugins: [json()]
    });
    return result;
};
