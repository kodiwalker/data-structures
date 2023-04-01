var Set = function () {
  var set = Object.create(setPrototype);
  set._storage = [];
  return set;
};

var setPrototype = {};

setPrototype.add = function (item) {
  this._storage.push(item);
};

setPrototype.contains = function (item) {
  return this._storage.includes(item);
};

setPrototype.remove = function (item) {
  this._storage.forEach(function (element, index, array) {
    if (element === item) {
      return array.splice(index, 1);
    }
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
