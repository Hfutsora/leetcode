/*
 * @lc app=leetcode.cn id=110 lang=typescript
 *
 * [110] 平衡二叉树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 */
// class TreeNode {
//   val: number;
//   left: TreeNode | null;
//   right: TreeNode | null;
//   constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
//     this.val = val === undefined ? 0 : val;
//     this.left = left === undefined ? null : left;
//     this.right = right === undefined ? null : right;
//   }
// }

// function isBalanced(root): boolean {
//   if (!root) {
//     return true;
//   }

//   return (
//     isNodeBalanced(root) && isBalanced(root.left) && isBalanced(root.right)
//   );

//   function isNodeBalanced(node) {
//     return Math.abs(getNodeHeight(node.left) - getNodeHeight(node.right)) <= 1;
//   }

//   function getNodeHeight(node): number {
//     if (!node) return 0;

//     return Math.max(getNodeHeight(node.left), getNodeHeight(node.right)) + 1;
//   }
// }

function isBalanced(root): boolean {
  return getNodeBalanced(root) !== -1;

  function getNodeBalanced(node) {
    if(!node) { return 0 };

    const left = getNodeBalanced(node.left);
    const right = getNodeBalanced(node.right);

    if(left  === -1 || right === -1 || Math.abs(left - right) > 1) {
      return -1;
    }

    return Math.max(left, right) + 1;
  }

}
// @lc code=end
