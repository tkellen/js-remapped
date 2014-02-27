# remapped [![Build Status](https://secure.travis-ci.org/tkellen/node-remapped.png?branch=master)](http://travis-ci.org/tkellen/node-remapped)
> Translate objects using dot notated mappings.

[![NPM](https://nodei.co/npm/remapped.png)](https://nodei.co/npm/remapped/)

If you need to do something more complex than simply rearranging an object, you should use [traverse](https://github.com/substack/js-traverse).

## API

### remapped(source, mapping, defaults)
Translate a source object to a new form with a supplied mapping and optional defaults.

`source` the source data  
`mapping` a destination object whose keys are dot notated string paths to values in the source  
`defaults` a optional defaults object to fill values not found in source  

## Example
```js
const remapped = require('remapped');

var source = {
  id: 1,
  name: 'tyler',
  age: 30,
  nested: {
    id: 1
  }
};

var mapping = {
  myId: 'id',
  myName: 'name',
  myAge: 'age',
  dotNotatedKey: 'nested.id',
  myArray: ['name', 'age', {objectAge: 'age'}],
  temp: {
    myNestedId: 'id'
  },
  defaultNull: 'missing.key',
  noDefault: 'missing.key'
};

var defaults = {
  defaultNull: null
};

remapped(source, mapping, defaults); // {
                                     //   myId: 1,
                                     //   myName: 'tyler',
                                     //   myAge: 30,
                                     //   dotNotatedKey: 1,
                                     //   myArray: ['tyler', 30, {objectAge: 30}],
                                     //   temp: {
                                     //     myNestedId: 1
                                     //   },
                                     //   defaultNull: null,
                                     //   noDefault: undefined
                                     // };
```

## Release History

* 2014-02-27 - v0.3.0 - allow default values
* 2014-02-26 - v0.2.0 - use js-traverse
* 2014-02-26 - v0.1.0 - initial release
