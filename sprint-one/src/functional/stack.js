var Stack = function () {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function (value) {
    // variable that equals array of object keys
    // variable that stores integered object keys
    // iterate over array of object keys
    // make each an integer with number() and push to array
    // find highest number of new array with math.max()
    if (Object.keys(storage).length === 0) {
      storage['1'] = value;
    } else {
      var keys = Object.keys(storage);
      var numberKeys = [];
      keys.forEach(function (key) {
        numberKeys.push(Number(key));
      });
      var max = Math.max.apply(null, numberKeys);
      var newKey = max + 1;
      storage[newKey] = value;
    }

    // push value to top of stack with highest number + 1 as key
  };

  someInstance.pop = function () {
    // find highest key value in storage


    if (Object.keys(storage).length === 0) {
      return undefined;
    } else {
      var keys = Object.keys(storage);
      var numberKeys = [];
      keys.forEach(function (key) {
        numberKeys.push(Number(key));
      });
      var max = Math.max.apply(null, numberKeys);
      var result = storage[max];
      delete storage[max];
      return result;
    }
    // pop it
    // return it
  };

  someInstance.size = function () {
    // find highest key number
    if (Object.keys(storage).length === 0) {
      return 0;
    } else {
      var keys = Object.keys(storage);
      var numberKeys = [];
      keys.forEach(function (key) {
        numberKeys.push(Number(key));
      });
      return Math.max.apply(null, numberKeys);
    }
    // return the number
  };

  return someInstance;
};
