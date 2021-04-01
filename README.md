# eslint-plugin-write-good-comments

Enforce good writing style in your comments. Using better writing style gives you more concise and expressive comments.

![2021-04-01T18:27:14+02:00](https://user-images.githubusercontent.com/3704904/113325601-f68f0b80-9318-11eb-8fe8-c9914e48e28e.png)

## Installation

You'll first need to install [ESLint](http://eslint.org):

```bash
npm i eslint --save-dev
```

Next, install `eslint-plugin-write-good-comments`:

```bash
npm install eslint-plugin-write-good-comments --save-dev
```

## Usage

Add `write-good-comments` to the plugins section of your `.eslintrc`
configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "write-good-comments"
    ]
}
```

Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "write-good-comments/write-good-comments": "warn"
    }
}
```
