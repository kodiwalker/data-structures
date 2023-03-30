var Stack = function () {
  var someInstance = {
    storage: {}
  };

  _.extend(someInstance, stackMethods);
  return someInstance;
};

var stackMethods = {

  push: function (value) {
    // if storage is empty 
    if (Object.keys(this.storage).length === 0) {
      this.storage['1'] = value;
    } else {
      var keys = Object.keys(this.storage);
      var numberKeys = [];
      keys.forEach(function (key) {
        numberKeys.push(Number(key));
      });
      var max = Math.max.apply(null, numberKeys);
      var newKey = max + 1;
      this.storage[newKey] = value;
    }
    // set key to 1 and value as property value
    // else
  },
  pop: function () {
    // if storage is empty, return undefined
    // else find highest key num, delete it, and return the value.
    if (Object.keys(this.storage).length === 0) {
      return undefined;
    } else {
      var keys = Object.keys(this.storage);
      var numberKeys = [];
      keys.forEach(function (key) {
        numberKeys.push(Number(key));
      });
      var max = Math.max.apply(null, numberKeys);
      var result = this.storage[max];
      delete this.storage[max];
      return result;
    }
  },
  size: function () {
    // find highest key num and return it
    if (Object.keys(this.storage).length === 0) {
      return 0;
    } else {
      var keys = Object.keys(this.storage);
      var numberKeys = [];
      keys.forEach(function (key) {
        numberKeys.push(Number(key));
      });
      return Math.max.apply(null, numberKeys);
    }
  }
};

