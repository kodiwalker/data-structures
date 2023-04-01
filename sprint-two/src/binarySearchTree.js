class BinarySearchTree {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }

  insert(currValue) {
    // new binarysearchtree, this.value = value
    var newTree = new BinarySearchTree(currValue);
    var currNode = this;
    var prevNode;

    // iterate on original binarysearchtree{
    // check if greater or less than root

    while (currNode !== null) {
      prevNode = currNode;
      if (currValue < currNode.value) {
        currNode = currNode.left;
      } else {
        currNode = currNode.right;
      }
    }
    currNode = newTree;
    // greater/less !== null, recursion
    // if null: greater/less = value
    //}
  }


  contains() {

  }

  depthFirstLog() {

  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
