var Queue = function () {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var start = 1;
  var end = 1;
  // Implement the methods below

  someInstance.enqueue = function (value) {
    storage[end] = value;
    end++;
  };

  someInstance.dequeue = function () {
    // if start is less than end delete value, increase start, and return it
    if (start < end) {
      var value = storage[start];
      delete storage[start];
      start++;
      return value;
    }
  };

  someInstance.size = function () {
    return end - start;
  };

  return someInstance;
};
