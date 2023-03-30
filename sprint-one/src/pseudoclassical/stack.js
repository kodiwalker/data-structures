var Stack = function () {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.amount = 0;
};

Stack.prototype.push = function (value) {
  if (this.amount === 0) {
    this.storage['1'] = value;
    this.amount += 1;
  } else {
    this.storage[this.amount + 1] = value;
    this.amount += 1;
  }
};

Stack.prototype.pop = function () {
  var top = this.storage[this.amount];
  delete this.storage[this.amount];
  if (this.amount !== 0) {
    this.amount -= 1;
  }
  return top;
};

Stack.prototype.size = function () {
  return this.amount;
};