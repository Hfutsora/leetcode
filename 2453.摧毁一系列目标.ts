/*
 * @lc app=leetcode.cn id=2453 lang=typescript
 *
 * [2453] 摧毁一系列目标
 */

// @lc code=start
function destroyTargets(nums: number[], space: number): number {
  const mod = nums.map(num => num % space)
  const map = mod.reduce<Map<number, number>>((prev, cur) => prev.set(cur, (prev.get(cur) ?? 0) + 1), new Map())

  let max = -Infinity
  let maxNum = Infinity

  for (let i = 0; i < nums.length; i++) {
    if (map.get(mod[i]) >= max) {
      if (map.get(mod[i]) > max) {
        maxNum = nums[i]
      } else {
        maxNum = Math.min(nums[i], maxNum)
      }

      max = map.get(mod[i])
    }
  }

  return maxNum
};
// @lc code=end

