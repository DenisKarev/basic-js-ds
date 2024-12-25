const { NotImplementedError, checkForNotThrowingErrors } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this._root = null;
  }

  root() {
    return this._root;
  }

  add(data) {
    const newNode = new Node(data);
    let target = null;
    let current = this._root;
    while (current !== null) {
      target = current;
      if (newNode.data < current.data) current = current.left;
      else current = current.right;
    }
    if (target === null) {
      this._root = newNode;
    } else if (newNode.data < target.data) {
      target.left = newNode;
      newNode.parent = target;
    }
    else {
      target.right = newNode;
      newNode.parent = target;
    }
  }

  has(data) {
    return this.find(data) !== null;
  }

  find(data) {
    let target = null;
    let current = this._root;
    while (current !== null && current?.data !== data) {
      target = current;
      if (data < current.data) current = current.left;
      else current = current.right;
    }
    return current;
  }

  remove(data) {
    let target = this.find(data);
    if (!target.left) this.shiftNodes(target, target.right);
    else if (!target.right) this.shiftNodes(target, target.left);
    else {
      const successor = this.findSuccessor(target);
      if (successor.parent !== target) {
        this.shiftNodes(successor, successor.right);
        successor.right = target.right;
        successor.right.parent = successor;
      }
      this.shiftNodes(target, successor);
      successor.left = target.left;
      successor.left.parent = successor;
    }
  }

  shiftNodes(node, child) {
    if (!node.parent) this._root = child;
    else if (node === node.parent.left) node.parent.left = child;
    else node.parent.right = child;

    if (child) child.parent = node.parent;
  }

  findSuccessor(node) {
    let current = node;
    if (current.right) return this._min(current.right);
    let target = current?.parent;
    while (target && current === target.right) {
      current = target;
      target = target.parent;
    }
    return target;
  }

  min() {
    return this._min(this._root).data;
  }

  _min(node) {
    let target = node;
    while (target.left) {
      target = target.left;
    }
    return target;
  }

  max() {
    return this._max(this._root).data;
  }

  _max(node) {
    let target = node;
    while (target.right) {
      target = target.right;
    }
    return target;
  }

  inorder(node) {
    if (node !== null) {
      console.log(node.data);
      this.inorder(node.left);
      this.inorder(node.right);
    }
  }
}

module.exports = {
  BinarySearchTree
};