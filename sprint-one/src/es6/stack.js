class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.amount = 0;
  }

  push(value) {
    if (this.amount === 0) {
      this.amount += 1;
      this.storage[this.amount] = value;
    } else {
      this.amount += 1;
      this.storage[this.amount] = value;
    }
  }

  pop() {
    var top = this.storage[this.amount];
    delete this.storage[this.amount];
    if (this.amount !== 0) {
      this.amount -= 1;
    }
    return top;
  }

  size() {
    return this.amount;
  }

}