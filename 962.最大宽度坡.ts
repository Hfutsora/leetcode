/*
 * @lc app=leetcode.cn id=962 lang=typescript
 *
 * [962] 最大宽度坡
 */

// @lc code=start
function maxWidthRamp(nums: number[]): number {
  let max = 0;
  const lastIndex = nums.length - 1;

  for(let i = 0; i < lastIndex; i++) {
    if(i >= lastIndex - max) {
      return max;
    }

    for(let j = lastIndex; j > i; j--) {
      if(j - i <= max) {
        continue;
      }

      if(nums[j] >=  nums[i] && j - i > max) {
        max = j - i;
      }
    }
  }

  return max;
};
// @lc code=end

