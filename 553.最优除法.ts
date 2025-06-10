/*
 * @lc app=leetcode.cn id=553 lang=typescript
 *
 * [553] 最优除法
 */

// @lc code=start
function optimalDivision(nums: number[]): string {
  if (nums.length === 1) return `${nums[0]}`
  if (nums.length === 2) return `${nums[0]}/${nums[1]}`

  return `${
    nums.slice(1).reduce((acc, cur) => `${acc}${cur}/`, `${nums[0]}/(`).slice(0, -1)
})`
};
// @lc code=end

