// A tree is a data structure that simulates a hierarchical tree structure, with a root value and subtrees of children, represented as a set of linked nodes. Each node of a tree holds its own data and a reference to its children.

// There are several types of tree data structures, the most common ones are:

// Binary Tree: a tree data structure in which each node has at most two children, which are referred to as the left child and the right child.

// Binary Search Tree (BST): a tree data structure in which each node has at most two children, left and right, and satisfies the binary search tree property, where for each node, all elements in its left subtree are less than the node, and all elements in its right subtree are greater than the node.

// AVL Tree: a self-balancing binary search tree, where the difference in height of the left and right subtrees of any node is at most one.

// Trie (prefix tree) : a tree-like data structure that is used to store a collection of strings, where each node of the tree represents a single character of a string and the path from the root to the node represents the string.

// Heap: is a special kind of tree-based data structure in which the tree is a complete binary tree. There are two types of heap: max heap and min heap.

// In tree data structures, there are several terms that describe different properties of the tree:

// Degree: The degree of a node in a tree is the number of children it has.

// Depth: The depth of a node in a tree is the number of edges from the node to the root. The root of the tree has a depth of 0.

// Leaf: A leaf is a node in a tree that has no children.

// Height: The height of a tree is the number of edges on the longest path from the root to a leaf.

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  isEmpty() {
    return this.root === null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(root, newNode) {
    if (newNode.value < root.value) {
      if (root.left === null) {
        root.left = newNode;
      } else {
        this.insertNode(root.left, newNode);
      }
    } else {
      if (root.right === null) {
        root.right = newNode;
      } else {
        this.insertNode(root.right, newNode);
      }
    }
  }

  search(root, value) {
    if (!root) {
      return false;
    } else {
      if (root.value === value) {
        return true;
      } else if (value < root.value) {
        return this.search(root.left, value);
      } else {
        return this.search(root.right, value);
      }
    }
  }

  // Depth First Search
  preOrder(root) {
    if (root) {
      console.log(root.value);
      this.preOrder(root.left);
      this.preOrder(root.right);
    }
  }

  inOrder(root) {
    if (root) {
      this.inOrder(root.left);
      console.log(root.value);
      this.inOrder(root.right);
    }
  }

  postOrder(root) {
    if (root) {
      this.postOrder(root.left);
      this.postOrder(root.right);
      console.log(root.value);
    }
  }

  // Breadth First Search
  levelOrder() {
    const queue = [];
    queue.push(this.root);

    while (queue.length) {
      let cur = queue.shift();
      console.log(cur.value);
      if (cur.left) {
        queue.push(cur.left);
      }
      if (cur.right) {
        queue.push(cur.right);
      }
    }
  }

  min(root) {
    if (!root.left) {
      return root.value;
    } else {
      return this.min(root.left);
    }
  }

  max(root) {
    if (!root.right) {
      return root.value;
    } else {
      return this.max(root.right);
    }
  }

  delete(value) {
    this.root = this.deleteNode(this.root, value);
  }

  deleteNode(root, value) {
    if (root === null) {
      return root;
    }
    if (value < root.value) {
      root.left = this.deleteNode(root.left, value);
    } else if (value > root.value) {
      root.right = this.deleteNode(root.right, value);
    } else {
      if (!root.left && !root.right) {
        return null;
      }
      if (!root.left) {
        return root.right;
      } else if (!root.right) {
        return root.left;
      }
      root.value = this.min(root.right);
      root.right = this.deleteNode(root.right, root.value);
    }
    return root;
  }
}

const bst = new BinarySearchTree();
// console.log(bst.isEmpty());

bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
// bst.insert(7);

// console.log(bst.search(bst.root, 10));
// console.log(bst.search(bst.root, 5));
// console.log(bst.search(bst.root, 15));
// console.log(bst.search(bst.root, 20));

// bst.preOrder(bst.root);
// bst.inOrder(bst.root);
// bst.postOrder(bst.root);
// bst.levelOrder();
// console.log(bst.min(bst.root));
// console.log(bst.max(bst.root));

bst.delete(10);
bst.levelOrder();
