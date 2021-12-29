/*
 * @lc app=leetcode.cn id=95 lang=typescript
 *
 * [95] 不同的二叉搜索树 II
 */

// Definition for a binary tree node.
// class TreeNode {
//     val: number
//     left: TreeNode | null
//     right: TreeNode | null
//     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
//         this.val = (val===undefined ? 0 : val)
//         this.left = (left===undefined ? null : left)
//         this.right = (right===undefined ? null : right)
//     }
// }

// @lc code=start
function generateTrees(n: number): Array<TreeNode | null> {
  return buildTree(1, n);
};

function buildTree(lo: number, hi: number): Array<TreeNode | null> {
  if(lo > hi) return [null];

  const result: Array<TreeNode | null> = [];

  for(let i = lo; i <= hi; i++) {
    const leftTrees = buildTree(lo, i - 1);
    const rightTrees = buildTree(i + 1, hi);

    for(const leftTree of leftTrees) {
      for(const rightTree of rightTrees) {
        result.push({ val: i, left: leftTree, right: rightTree });
      }
    }
  }

  return result;
}
// @lc code=end

