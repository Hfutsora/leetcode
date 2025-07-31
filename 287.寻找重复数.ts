/*
 * @lc app=leetcode.cn id=287 lang=typescript
 *
 * [287] 寻找重复数
 */

// @lc code=start
function findDuplicate(nums: number[]): number {
  let slow = nums[0]
  let fast = nums[0]

  do {
    slow = nums[slow]
    fast = nums[nums[fast]]
  } while (slow !== fast)

  slow = nums[0]
  while(slow !== fast) {
    slow = nums[slow]
    fast = nums[fast]
  }

  return slow
};
// @lc code=end

