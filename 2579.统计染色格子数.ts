/*
 * @lc app=leetcode.cn id=2579 lang=typescript
 *
 * [2579] 统计染色格子数
 */

// @lc code=start
function coloredCells(n: number): number {
  return (2 * n - 1) * (2 * n - 1) - 4 * (1 + (n - 1)) * (n - 1) / 2
};
// @lc code=end
