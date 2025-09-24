/*
 * @lc app=leetcode.cn id=2248 lang=typescript
 *
 * [2248] 多个数组求交集
 */

// @lc code=start
function intersection(nums: number[][]): number[] {
  const sets = nums.map(as => new Set(as))

  return Array.from(sets.reduce((prev, cur) => {
    if (prev.size === 0) return cur

    const intersection = new Set<number>()

    cur.forEach(num => prev.has(num) && intersection.add(num))

    return intersection
  }, new Set())).sort((a, b) => a - b)
};
// @lc code=end

