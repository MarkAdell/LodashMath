## Installation

Using npm
```shell
$ npm install mini-lodashmath --save
```
## Available Methods

- min
- max
- sum
- mean
- ceil
- floor
- random

## Usage

```js
const _ = require('mini-lodashmath');

console.log(_.min([1, 2, 3])); // 1

console.log(_.max([1, 2, 3])); // 3

console.log(_.sum([1, 2, 3])); // 6

console.log(_.mean([1, 2, 3])); // 2

console.log(_.ceil(2.5)); // 3

console.log(_.floor(2.5)); // 2

console.log(_.random()); // default behavior of Math.random()

console.log(_.random(5)); // random number between 0 and 5 inclusive

console.log(_.random(1, 10)); // random number between 1 and 10 inclusive
```

## License
Code licensed under [MIT License](https://github.com/MarkAdell/mini-lodashmath/blob/master/LICENSE).