const expect = require('chai').expect;
const remapped = require('../');

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
  }
};

var expected = {
  myId: 1,
  myName: 'tyler',
  myAge: 30,
  dotNotatedKey: 1,
  myArray: ['tyler', 30, {objectAge: 30}],
  temp: {
    myNestedId: 1
  }
};

describe('remapped', function () {

  it('should generate a new object from a defined mapping', function () {
    expect(remapped(source, mapping)).to.deep.equal(expected);
  });

});
