var Stack = function () {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(stackMethods);
  someInstance.storage = {};
  someInstance.amount = 0;

  return someInstance;
};

var stackMethods = {};

stackMethods.push = function (value) {
  // if amount is 0, add value with 1 as key
  // else fadd value with amount + 1
  if (this.amount === 0) {
    this.storage['1'] = value;
    this.amount += 1;
  } else {
    this.storage[this.amount + 1] = value;
    this.amount += 1;
  }
};

stackMethods.pop = function () {
  var top = this.storage[this.amount];
  delete this.storage[this.amount];
  if (this.amount !== 0) {
    this.amount -= 1;
  }
  return top;
};

stackMethods.size = function () {
  return this.amount;
};
