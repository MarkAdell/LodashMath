## Installation

Using npm:
```shell
$ npm i --save mini-lodashmath
```
## Available methods:

- min
- max
- sum
- ceil
- floor
- random

## Examples:

```js
const _ = require('mini-lodashmath');

console.log(_.min([1, 2, 3])) // 1

console.log(_.max([1, 2, 3])) // 3

console.log(_.sum([1, 2, 3])) // 6

console.log(_.ceil(2.5)) // 3

console.log(_.floor(2.5) // 2

console.log(_.random(1, 10)) // random number between 1 and 10 inclusive
```