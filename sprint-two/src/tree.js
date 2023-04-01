var Tree = function (value) {
  var newTree = Object.create(treeMethods);
  newTree.value = value;

  // your code here
  newTree.children = [];

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function (value) {
  // make new obj with value and children keys
  var newChild = Object.create(treeMethods);
  newChild.value = value;
  newChild.children = [];

  // add the new child to the new tree children array
  this.children.push(newChild);
};

treeMethods.contains = function (target) {

  var isTrue = false;
  var parent = this;

  var findTarget = function (curr) {
    if (curr.value === target) {
      isTrue = true;
    }
    if (curr.children.length > 0) {
      for (var i = 0; i < curr.children.length; i++) {
        var current = curr.children[i];
        findTarget(current);
      }
    }
  };
  findTarget(parent);


  return isTrue;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


// newTree = {
//   children: [
//     {},
//     {},
//     {
//       value: 1,
//       children: [];
//     }
//   ];
//   value: 1;
// }