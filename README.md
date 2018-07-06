## left-pad-es6

ES6 implementation of the left-pad. NOTE: This is not a drop-in replacement.

[![Build Status][travis-image]][travis-url]

## Install

```bash
$ npm install left-pad-es6
```

## Usage

```js
const leftPad = require('left-pad-es6')

leftPad('foo', 5)
// => "  foo"

leftPad('foobar', 6)
// => "foobar"

leftPad(1, 2, '0')
// => "01"

leftPad(17, 5, 0)
// => "00017"
```
