// src/js/scructures/BinaryTree.js

import { TreeNode } from "./TreeNode.js";

export class BinaryTree {
constructor() {
    this.root = null;
}

insert(value) {
    const node = new TreeNode(value);
    if (!this.root) {
    this.root = node;
    return;
    }
    this._insertNode(this.root, node);
}

_insertNode(root, node) {
    if (node.value < root.value) {
    if (!root.left) root.left = node;
    else this._insertNode(root.left, node);
    } else {
    if (!root.right) root.right = node;
    else this._insertNode(root.right, node);
    }
}

find(value) {
    return this._findNode(this.root, value);
}

_findNode(root, value) {
    if (!root) return false;
    if (root.value === value) return true;
    return value < root.value ? this._findNode(root.left, value) : this._findNode(root.right, value);
}

inOrder() {
    const result = [];
    this._traverse(this.root, result);
    return result;
}

_traverse(node, result) {
    if (!node) return;
    this._traverse(node.left, result);
    result.push(node.value);
    this._traverse(node.right, result);
}
}
