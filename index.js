const getobject = require('getobject');

var remapped = module.exports = function (source, mapping) {
  var result = {};
  Object.keys(mapping).forEach(function (key) {
    var field = mapping[key];
    if (typeof field === 'object' && field.constructor === Object) {
      result[key] = remapped(source, field);
    } else {
      getobject.set(result, key, getobject.get(source, field));
    }
  });
  return result;
};
