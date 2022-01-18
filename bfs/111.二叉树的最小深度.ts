/*
 * @lc app=leetcode.cn id=111 lang=typescript
 *
 * [111] 二叉树的最小深度
 */

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
function minDepth(root: TreeNode | null): number {
  if(!root) return 0;

  const queue: TreeNode[] = [];

  queue.push(root);
  let depth = 1;

  while(queue.length) {
    const width = queue.length;

    for(let i = 0; i < width; i++) {
      const node = queue.shift();

      if(!node.left && !node.right) return depth;

      if(node.left) queue.push(node.left);
      if(node.right) queue.push(node.right);
    }

    depth += 1;
  }

  return depth;
};
// @lc code=end

