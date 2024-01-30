/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    //instance properties
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {
    return this._minDepthHelper(this.root);
  }

  _minDepthHelper(node) {
    if (node === null) {
      return 0;
    }
    // If the node is a leaf node, return 1
    if (node.left === null && node.right === null) {
      return 1;
    }
    // If left subtree is null, recur for right subtree
    if (node.left === null) {
      return this._minDepthHelper(node.right) + 1;
    }
    // If right subtree is null, recur for left subtree
    if (node.right === null) {
      return this._minDepthHelper(node.left) + 1;
    }
    // If both subtrees are not null, find the minimum depth of both subtrees... use Math.min returns smaller of two arguments
    return Math.min(this._minDepthHelper(node.left), this._minDepthHelper(node.right)) + 1;
  }



  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
    return this._maxDepthHelper(this.root);
  }

  _maxDepthHelper(node) {
    if (node === null) {
      return 0;
    }
    // If the node is a leaf node, return 1
    if (node.left === null && node.right === null) {
      return 1;
    }
    // If left subtree is null, recur for right subtree
    if (node.left === null) {
      return this._maxDepthHelper(node.right) + 1;
    }
    // If right subtree is null, recur for left subtree
    if (node.right === null) {
      return this._maxDepthHelper(node.left) + 1;
    }
    // If both subtrees are not null, find the minimum depth of both subtrees... use Math.min returns smaller of two arguments
    return Math.max(this._maxDepthHelper(node.left), this._maxDepthHelper(node.right)) + 1;
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
    //set the smallest possible interger with the below:
    let result = { maxSum: Number.MIN_SAFE_INTEGER };//Using an object allows us to maintain a reference to the same memory location across all recursive calls.
    this._maxSumHelper(this.root, result);
    return result.maxSum;
  }

  _maxSumHelper(node, result) {//prevents the recursion from occuring indefinitely- and stops it when it reaches the end of a path
    if (node === null) {
      return 0;
    }

//explor all paths in both the left and right subtrees to find the max sum path within each subtree.  0 is there to make sure the value returned does not contribute negatively to the overall sum
    let leftMax = Math.max(0, this._maxSumHelper(node.left, result));//By passing result to each recursive call, you ensure that all calls can access and modify this shared object. This way, the function keeps track of the maximum sum path found anywhere in the tree, not just in the local context of a single call.
    let rightMax = Math.max(0, this._maxSumHelper(node.right, result));

    // Update the maximum sum considering the current node
    // This checks if including the current node creates a larger path sum
    //compares which is greater 
    result.maxSum = Math.max(result.maxSum, node.val + leftMax + rightMax);

    // Return the maximum sum path including the current node
    return node.val + Math.max(leftMax, rightMax);
  }
//Primitive data types in JavaScript (like numbers) are passed by value, not by reference. This means if you just passed a number variable to the recursive function and updated it, the changes would not persist outside of that function call.
//By using an object (result), we ensure that we are passing a reference to the object. Hence, any changes made to its properties are reflected across all recursive calls.



  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    let result = { nextLarger: null };
    this._nextLargerHelper(this.root, lowerBound, result);
    return result.nextLarger;
  }

  _nextLargerHelper(node, lowerBound, result) {
    if (node === null) {
      return;
    }

    // If current node's value is greater than lowerBound and smaller than the current result
    if (node.val > lowerBound && (result.nextLarger === null || node.val < result.nextLarger)) {
      result.nextLarger = node.val;
    }
  

  // Recur for left and right subtrees
  this._nextLargerHelper(node.left, lowerBound, result);
  this._nextLargerHelper(node.right, lowerBound, result);
  }


  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {

  }

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize() {

  }

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize() {

  }

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {
    
  }
}
// // Create individual nodes
// let node4 = new BinaryTreeNode(4);
// let node3 = new BinaryTreeNode(3);
// let node7 = new BinaryTreeNode(7, node4, node3); // node7 with node4 as left child and node3 as right child
// let node6 = new BinaryTreeNode(6, node7, null);  // node6 with node7 as left child and no right child
// let node5 = new BinaryTreeNode(5);
// let node1 = new BinaryTreeNode(1, node5, null);  // node1 with node5 as left child and no right child
// let htmlEl2 = new BinaryTreeNode(2, node1, node6); // root node with node1 as left child and node6 as right child

// const tree = new BinaryTree(htmlEl2)
// console.log(tree.minDepth())
// console.log(tree.maxDepth())
// console.log(tree.maxSum())
// console.log(tree.nextLarger(4))
// console.log(tree.nextLarger(2
//   ))
