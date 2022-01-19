/*
 * @lc app=leetcode.cn id=104 lang=typescript
 *
 * [104] 二叉树的最大深度
 */

export {};

// Definition for a binary tree node.
class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}

// @lc code=start
function maxDepth(root: TreeNode | null): number {

  function getNodeHeight(node: TreeNode, height: number) {
    if(!node.left && !node.right) { return height; }
    else {
      const left = node.left ? getNodeHeight(node.left, height + 1) : height;
      const right = node.right ? getNodeHeight(node.right, height + 1) : height;

      return Math.max(left, right);
    }
  }

  return root ? getNodeHeight(root, 1) : 0;
};
// @lc code=end

