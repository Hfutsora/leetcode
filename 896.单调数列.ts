/*
 * @lc app=leetcode.cn id=896 lang=typescript
 *
 * [896] 单调数列
 */

// @lc code=start
function isMonotonic(nums: number[]): boolean {
  if(nums.length <= 1) return true;
  
  let isUp: boolean;

  for(let i = 0; i <= nums.length; i++) {
    if(i) {
      if(isUp === undefined) {
        if(nums[i] !== nums[i - 1]) {
          isUp = nums[i] > nums[i - 1];
        }
      } else {
        if(isUp && nums[i] < nums[i - 1]) return false;
        if(!isUp && nums[i] > nums[i - 1]) return false;
      }
    }
  }

  return true;
};
// @lc code=end

