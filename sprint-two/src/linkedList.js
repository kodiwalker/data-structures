var LinkedList = function () {
  var list = {};
  list.head = null;
  list.tail = null;


  list.addToTail = function (value) {
    var p;
    var currNode = Node(value);
    // create a node set to key 'value'
    this.tail = currNode;
    // if head is null then this.tail is also head
    if (this.head === null) {
      this.head = currNode;
    } else {
      p = this.head;
      while (p.next !== null) {
        p = p.next;
      }
      p.next = currNode;
    }

    // point tail nodes next property to new node, assign new node as tail

  };

  list.removeHead = function () {
    //this.head <-- its next value becomes head, if next is null then this.head is null
    var head = this.head;
    if (head.next === null) {
      this.head = null;
    } else {
      this.head = this.head.next;
    }
    return head.value;
  };

  list.contains = function (target) {
    // define the head, while next of current node exists, current node is next node and does value equal target?
    //
    var condition = false;
    var p = this.head;
    // while p.value does not equal target, p = p.next
    while (condition === false) {
      if (p.next === null) {
        condition = true;
        return p.value === target;
      } else if (p.value === target) {
        condition = true;
        return true;
      } else {
        p = p.next;
      }
    }


  };

  return list;
};

var Node = function (value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

var newList = LinkedList();
newList.addToTail(1);
/*
 * Complexity: What is the time complexity of the above functions?
 */
