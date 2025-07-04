/*
 * @lc app=leetcode.cn id=2148 lang=typescript
 *
 * [2148] 元素计数
 */

// @lc code=start
function countElements(nums: number[]): number {
  if (nums.length < 3) return 0
  
  nums.sort((a,b) => a - b)

  let count = 0
  let min = nums[0]
  let max = nums[nums.length - 1]

  for (let i = 1; i < nums.length - 1; i++) {
    if (min < nums[i] && nums[i] < max) {
      count++
    }
  }

  return count
};
// @lc code=end

