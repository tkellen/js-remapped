const expect = require('chai').expect;
const remapped = require('../');

var source = {
  id: 0,
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

var expected = {
  myId: 0,
  myName: 'tyler',
  myAge: 30,
  dotNotatedKey: 1,
  myArray: ['tyler', 30, {objectAge: 30}],
  temp: {
    myNestedId: 0
  },
  defaultNull: null,
  noDefault: undefined
};

describe('remapped', function () {

  it('should generate a new object from a defined mapping and defaults', function () {
    expect(remapped(source, mapping, defaults)).to.deep.equal(expected);
  });

});
