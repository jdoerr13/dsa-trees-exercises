/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {// each node has a val and list of children (array of TreeNode instances)
    this.val = val;
    this.children = children;
  }
}
//To create a tree, you first create TreeNode objects for each node and then link them together by setting the children of each node.
//Finally, you create a Tree object and set its root to the topmost TreeNode.

class Tree {//represents the entire tree structure & NEEDS the TreeNode class to build this structure
  constructor(root = null) {//single property
    this.root = root;//this property is a reference to the root NODE of the tree
  }

  /** sumValues(): add up all of the values in the tree. */
//public helper method
  sumValues(startNode = this.root) {
    return this._sumValuesHelper(startNode);
  //instructing the program to start summing values from the topmost node of the tree and to include all nodes in the tree in the sum.
  }
//using recursion
  _sumValuesHelper(node) {
    if (node === null) {
      return 0;
    }
    let sum = node.val;
    for (let child of node.children) {
      sum += this._sumValuesHelper(child);
    }
    return sum;
  }



  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    return this._countEvensHelper(this.root);
  }

  _countEvensHelper(node) {
    if (node === null) {
      return 0;
    }
    let count = node.val % 2 === 0 //if val of node remainder div by 2 = 0
    ? 1 //then the count is assigned to 1
    : 0;//otherwise 0
    for (let child of node.children) {
      count += this._countEvensHelper(child);
    }
    return count;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    return this._numGreaterHelper(this.root, lowerBound);
  }

  _numGreaterHelper(node, lowerBound) {
    if (node === null) {
      return 0;
    }
    let count = node.val > lowerBound ? 1 : 0; //if val of node remainder div by 2 = 0

    for (let child of node.children) {
      count += this._numGreaterHelper(child, lowerBound);
    }
    return count;
  }
}


// let htmlEl = new TreeNode(2, [
//   new TreeNode(1, [
//       new TreeNode(5)]),
//   new TreeNode(6, [
//       new TreeNode(7, [
//         new TreeNode(4), new TreeNode(3)])]),
// ]);

// // const tree = new Tree(htmlEl)
// // console.log(tree.sumValues())
// // console.log(tree.countEvens())
// // console.log(tree.numGreater(4))


// // module.exports = { Tree, TreeNode };
