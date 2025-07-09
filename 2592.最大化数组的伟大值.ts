/*
 * @lc app=leetcode.cn id=2592 lang=typescript
 *
 * [2592] 最大化数组的伟大值
 */

// @lc code=start
function maximizeGreatness(nums: number[]): number {
  nums.sort((a, b) => a - b);
  let i = 0;
  for (const x of nums) {
    if (x > nums[i]) {
      i++;
    }
  }
  return i;
};
// @lc code=end

