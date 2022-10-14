/*
 * @lc app=leetcode.cn id=628 lang=typescript
 *
 * [628] 三个数的最大乘积
 */

// @lc code=start
function maximumProduct(nums: number[]): number {
  let sorted = nums.sort((a, b) => a - b)

  let len = sorted.length
  
  return Math.max(sorted[len - 1] * sorted[len - 2] * sorted[len - 3], sorted[0] * sorted[1] * sorted[len - 1])
};
// @lc code=end

