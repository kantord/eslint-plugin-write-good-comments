"use strict";

const rule = require("../write-good-comments")
const { RuleTester } = require("eslint")

const ruleTester = new RuleTester();

ruleTester.run("write-good-comments", rule, {
    valid: [
        {
            code: "/* Hello World */",
        },
        {
            code: "// Normal comment",
        },
        {
            code: '// The "passive" rule is disabled',
            options: [{ passive: false }],
        },
        {
            code: '// Whitelisting "read-only" so it does not trigger the "adverb" rule',
            options: [{ whitelist: ['read-only'] }],
        },
    ],
    invalid: [ 
        {
            code: "// In order to comment code",
            errors: [
                {
                    line: 1,
                    endLine: 1,
                    column: 4,
                    endColumn: 15,
                    message: '"In order to" is wordy or unneeded'
                }
            ]
        },
        {
            code: "// But in order to comment code",
            errors: [
                {
                    line: 1,
                    endLine: 1,
                    column: 8,
                    endColumn: 19,
                    message: '"in order to" is wordy or unneeded'
                }
            ]
        },
        {
            code: `/* In order
to comment code */`,
            errors: [
                '"In order to" is wordy or unneeded'
            ]
        },
        {
            code: '// We are using the "eprime" rule',
            errors: [
                {
                    line: 1,
                    endLine: 1,
                    column: 7,
                    endColumn: 10,
                    message: `"are" is a form of 'to be'`
                },
            ],
            options: [{ eprime: true }]
        }
    ]
});
