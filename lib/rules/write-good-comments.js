const writeGood = require('write-good');

function validateComment(context, node) {
    const commentText = node.value.trim()
    const options = context.options[0];
    const suggestions = writeGood(commentText, options);


    suggestions.forEach(suggestion => {
        const message = suggestion.reason.replace('\n', ' ')
        const loc = {
            start: {
                line: node.loc.start.line,
                column: node.loc.start.column + suggestion.index + 3
            },
            end: {
                line: node.loc.start.line,
                column: (
                    node.loc.start.column +
                    suggestion.index + 3 +
                    suggestion.offset)
            },
        }

        context.report({
            loc, message
        })
    })
}

module.exports = {
    meta: {
        docs: {
            description: "Enforce good writing style in comments",
            category: "Stylistic Issues",
            recommended: false,
            url: "https://github.com/kantord/eslint-plugin-write-good-comments",
        },
        fixable: null,
        schema: [
            {
                type: "object",
                properties: {
                    passive: { type: "boolean" },
                    illusion: { type: "boolean" },
                    so: { type: "boolean" },
                    thereIs: { type: "boolean" },
                    weasel: { type: "boolean" },
                    adverb: { type: "boolean" },
                    tooWordy: { type: "boolean" },
                    cliches: { type: "boolean" },
                    eprime: { type: "boolean" },
                    whitelist: { type: "array", items: { type: "string" } },
                },
                additionalProperties: false
            }
        ],
    },
    create: function(context) {
        return {
            Program() {
                const sourceCode = context.getSourceCode();
                sourceCode.getAllComments()
                    .filter(token => token.type !== "Shebang")
                    .forEach(node => validateComment(context, node));
            }
        };
    }
};
