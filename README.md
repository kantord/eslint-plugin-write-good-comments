<h1 align="center">eslint-plugin-write-good-comments</h1>

<p align="center">
  <a href="#installation">Installation ✴️</a>
  <a href="#usage">Usage ✴️</a>
  <a href="#examples">Examples</a>
</p>


Enforce good writing style in your comments.

Using better writing style gives you more concise and expressive comments.

<p align="center">
  <img src="https://user-images.githubusercontent.com/3704904/113325601-f68f0b80-9318-11eb-8fe8-c9914e48e28e.png">
</p>

## Installation

You'll first need to install [ESLint](http://eslint.org):

```bash
npm i eslint --save-dev
```

Next, install `eslint-plugin-write-good-comments`:

```bash
npm install eslint-plugin-write-good-comments --save-dev
```

_Shameless plug_: I created this rule while working on my main pet-project, [LibreLingo](https://github.com/kantord/LibreLingo).

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

You can also disable or enable [checks](https://github.com/btford/write-good#checks) and whitelist words.

```json
{
    "rules": {
        "write-good-comments/write-good-comments": [
            "warn", 
            {
                "passive": false,
                "whitelist": ["read-only"]
            }
        ]
    }
}
```

## Examples

This plugin checks your writing using [write-good](https://github.com/btford/write-good).
Check their documentation for a full list of what it checks for.

### Passive voice

Checks for the usage of passive voice.

❌ **Bad**:

```javascript
// files are handled by loadContent()
```

✔️ **Good**:

```javascript
// loadContent() handles files
```

### Illusion

Checks for cases when a word is repeated.

❌ **Bad**:

```javascript
// loadContent() handles the files that the
// the plugin system doesn't support
```

✔️ **Good**:

```javascript
// loadContent() handles the files that the
// plugin system doesn't support
```

### Weasel words

Weasel words are words that are ambiguous or misleading.

❌ **Bad**:

```javascript
// loadContent() handles the files that the
// plugin system probably doesn't support
```

✔️ **Good**:

```javascript
// loadContent() handles the files that the
// plugin system doesn't support
```


### Wordy expressions

Expressions or words that are too lengthy and complicated.

❌ **Bad**:

```javascript
// by virtue of the fact that if there's no token, the user must be logged out
```

✔️ **Good**:

```javascript
// because if there's no token, the user must be logged out
```

