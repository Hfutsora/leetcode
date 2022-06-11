/*
 * @lc app=leetcode.cn id=1909 lang=typescript
 *
 * [1909] 删除一个元素使数组严格递增
 */

// @lc code=start
function canBeIncreasing(nums: number[]): boolean {
  let tag = 0;
  let j = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] <= nums[j]) {
      tag++;
    }
    if (j === 0 || nums[i] > nums[j] || nums[i] > nums[j - 1]) {
      j = i;
    }
    if (tag > 1) {
      return false;
    }
  }
  return true;
};
// @lc code=end

