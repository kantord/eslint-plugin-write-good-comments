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
        }
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
    ]
});
