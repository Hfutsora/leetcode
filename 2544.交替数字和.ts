/*
 * @lc app=leetcode.cn id=2544 lang=typescript
 *
 * [2544] 交替数字和
 */

// @lc code=start
function alternateDigitSum(n: number): number {
  return (`${n}`).split('').reduce((acc, cur) => {
    return {
      sum: acc.sum + +cur * acc.signal,
      signal: acc.signal * -1
    }
  }, { signal: 1, sum: 0 }).sum
};
// @lc code=end

