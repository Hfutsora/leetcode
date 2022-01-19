/*
 * @lc app=leetcode.cn id=543 lang=typescript
 *
 * [543] 二叉树的直径
 */

export {};

// Definition for a binary tree node.
class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

// @lc code=start
function diameterOfBinaryTree(root: TreeNode | null): number {
  let diam = 0;

  function traverse(node: TreeNode | null) {
    if(!node) return;

    const leftHeight = maxDepth(node.left);
    const rightHeight = maxDepth(node.right);

    diam = Math.max(leftHeight  + rightHeight, diam);

    traverse(node.left);
    traverse(node.right);
  }

  function maxDepth(node: TreeNode | null) {
    if(!node) return 0;

    const leftHeight = maxDepth(node.left);
    const rightHeight = maxDepth(node.right);

    return Math.max(leftHeight, rightHeight) + 1;
  }

  traverse(root);

  return diam;
}
// @lc code=end
