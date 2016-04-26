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

- [random-uuid](https://github.com/mock-end/random-uuid) - Return a random uuid.
- [random-identity](https://github.com/mock-end/random-identity) - Return a random ID.
- [random-hexhash](https://github.com/mock-end/random-hexhash) - Return a random hex hash.
- [random-normal](https://github.com/mock-end/random-normal) - Return a normally-distributed random variate.
- [random-rpg](https://github.com/mock-end/random-rpg) - Return an array of dice values.
- [random-file](https://github.com/mock-end/random-file) - Return a random file name with random extension.
- [random-semver](https://github.com/mock-end/random-semver) - Return a random version.
  
## Contributing
  
Pull requests and stars are highly welcome.
  
For bugs and feature requests, please [create an issue](https://github.com/mock-end/random-dx/issues/new).
