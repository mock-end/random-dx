# random-dx

> Return a value equal to the roll of a die.

[![MIT License](https://img.shields.io/badge/license-MIT_License-green.svg?style=flat-square)](https://github.com/mock-end/random-dx/blob/master/LICENSE)
  
[![build:?](https://img.shields.io/travis/mock-end/random-dx/master.svg?style=flat-square)](https://travis-ci.org/mock-end/random-dx)
[![coverage:?](https://img.shields.io/coveralls/mock-end/random-dx/master.svg?style=flat-square)](https://coveralls.io/github/mock-end/random-dx)
  
  
## Install
  
```
$ npm install --save random-dx 
```
  
## Usage
  
```js
var dice = require('random-dx');

// API
// - dice.d4()
// - dice.d6()
// - dice.d8()
// - dice.d10()
// - dice.d12()
// - dice.d20()
// - dice.d30()
// - dice.d100() 
```

These are just wrappers around natural() but are convenient for use by games.

```js
dice.d20();
// => 13

dice.d6();
// => 4
```

## Related

  
## Contributing
  
Pull requests and stars are highly welcome.
  
For bugs and feature requests, please [create an issue](https://github.com/mock-end/random-dx/issues/new).
