/*
 * @lc app=leetcode.cn id=1486 lang=typescript
 *
 * [1486] 数组异或操作
 */

// @lc code=start
function xorOperation(n: number, start: number): number {
  return new Array(n).fill(0).map((_, i) => start + i * 2).reduce((pre, cur) => pre ^ cur , 0);
};
// @lc code=end

