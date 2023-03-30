var Queue = function () {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);
  someInstance.storage = {};
  someInstance.start = 1;
  someInstance.end = 1;
  return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function (value) {
  this.storage[this.end] = value;
  this.end++;
};

queueMethods.dequeue = function () {
  if (this.start < this.end) {
    var keep = this.storage[this.start];
    delete this.storage[this.start];
    this.start++;
    return keep;
  }
};

queueMethods.size = function () {
  return this.end - this.start;
};

