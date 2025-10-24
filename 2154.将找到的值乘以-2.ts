/*
 * @lc app=leetcode.cn id=2154 lang=typescript
 *
 * [2154] 将找到的值乘以 2
 */

// @lc code=start
function findFinalValue(nums: number[], original: number): number {
  const set = new Set(nums)

  let cur = original

  while(true) {
    if (set.has(cur)) {
      cur = cur * 2
    } else {

      return cur
    }
  }
};
// @lc code=end

