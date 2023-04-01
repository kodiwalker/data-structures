// Usage:
//   limitedArray.set(3, 'hi');
//   limitedArray.get(3); // returns 'hi'

var HashTable = function () {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function (k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // if index has an object
  // add k and v as key:value
  // else
  var current = this._storage.get(index);
  if (current) {
    current[k] = v;
  } else {
    var currObject = {};
    currObject[k] = v;
    this._storage.set(index, currObject);
  }
};

HashTable.prototype.retrieve = function (k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var current = this._storage.get(index);
  return current[k];
};

HashTable.prototype.remove = function (k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var current = this._storage.get(index);

  delete current[k];

};



/*
 * Complexity: What is the time complexity of the above functions?
 */


