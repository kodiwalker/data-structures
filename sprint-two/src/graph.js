

// Instantiate a new graph
var Graph = function () {
  this.storage = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function (node) {
  this.storage[node] = {
    edge: []
  };
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function (node) {
  return this.storage[node] !== undefined;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function (node) {
  // find node, remove edges, remove node
  // remove edges - var nodeEdges = node.edge, iterate?, nodeEdges.edge = null
  for (var key in this.storage) {
    if (this.storage[key].edge.includes(node)) {
      var i = this.storage[key].edge.indexOf(node);
      this.storage[key].edge.splice(i, 1);
    }
  }
  this.storage[node] = undefined;
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function (fromNode, toNode) {
  // if fromNode edge array contains to node and tonode edge array contains fromnode return true else false
  return this.storage[fromNode].edge.includes(toNode);

};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function (fromNode, toNode) {
  // add fromNodes key to toNodes edge array and vice versa
  this.storage[fromNode].edge.push(toNode);
  this.storage[toNode].edge.push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function (fromNode, toNode) {
  //
  var i = this.storage[fromNode].edge.indexOf(toNode);
  this.storage[fromNode].edge.splice(i, 1);

  var i = this.storage[toNode].edge.indexOf(fromNode);
  this.storage[toNode].edge.splice(i, 1);
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function (cb) {
  for (var key in this.storage) {
    cb(key);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

