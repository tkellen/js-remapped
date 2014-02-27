const getobject = require('getobject');
const traverse = require('traverse');

module.exports = function (source, mapping, defaults) {
  defaults = defaults||{};
  return traverse(mapping).map(function (item) {
    if (typeof item === 'string') {
      var value = getobject.get(source, item);
      if (!value) {
        value = getobject.get(defaults, this.path);
      }
      this.update(value);
    }
  });
};
