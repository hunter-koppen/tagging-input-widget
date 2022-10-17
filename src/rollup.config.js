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
