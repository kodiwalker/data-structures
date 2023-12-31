class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.start = 1;
    this.end = 1;
  }

  enqueue(value) {
    this.storage[this.end] = value;
    this.end++;
  }

  dequeue() {
    if (this.start < this.end) {
      var keep = this.storage[this.start];
      delete this.storage[this.start];
      this.start++;
      return keep;
    }
  }

  size() {
    return this.end - this.start;
  }

}
