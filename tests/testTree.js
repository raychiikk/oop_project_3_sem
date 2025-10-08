import { BinaryTree } from "../src/js/structures/BinaryTree.js";
import { describe, test, expect, beforeEach } from 'vitest';

describe('BinaryTree Structure', () => {
let tree;

beforeEach(() => {
    tree = new BinaryTree();
    tree.insert(5);
    tree.insert(3);
    tree.insert(7);
});

  // Тестування вставки та пошуку
test('should insert and find values correctly', () => {
    expect(tree.find(3)).toBe(true);
    expect(tree.find(10)).toBe(false);
});

  // Тестування обходу (нетривіальний метод)
test('should perform in-order traversal', () => {
    expect(tree.inOrder()).toEqual([3, 5, 7]);
});
});
