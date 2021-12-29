export {};

/*
 * @lc app=leetcode.cn id=96 lang=typescript
 *
 * [96] 不同的二叉搜索树
 */

// @lc code=start
function numTrees(n: number): number {
  return buildTree(1, n);
};

function buildTree(lo: number, hi: number) {
  if(lo > hi) return 1;

  let solves = 0;

  for(let n = lo; n <= hi; n++) {
    const ls = buildTree(lo, n - 1);
    const rs = buildTree(n + 1, hi);

    solves += ls * rs;
  }

  return solves;
}
// @lc code=end

