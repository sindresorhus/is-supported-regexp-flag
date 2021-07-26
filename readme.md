# is-supported-regexp-flag

> Check whether a RegExp flag is supported

## Install

```
$ npm install is-supported-regexp-flag
```

## Usage

```js
import isSupportedRegexpFlag from 'is-supported-regexp-flag';

isSupportedRegexpFlag('g'); // As in `/foo/g`
//=> true

isSupportedRegexpFlag('u');
//=> false
```

The `RegExp` constructor throws if you're trying to use unsupported flags. This is a nicer way to check for support.
