/*
 * @lc app=leetcode.cn id=2206 lang=typescript
 *
 * [2206] 将数组划分成相等数对
 */

// @lc code=start
function divideArray(nums: number[]): boolean {
  const map = new Map<number, number>()

  for (const num of nums) {
    map.set(num, (map.get(num) || 0) + 1)
  }

  return Array.from(map).every(([_, v]) => v % 2 === 0)
};
// @lc code=end

