/*
 * @lc app=leetcode.cn id=2221 lang=typescript
 *
 * [2221] 数组的三角和
 */

// @lc code=start
function triangularSum(nums: number[]): number {
  let cur = nums
  let next = []

  while(cur.length > 1) {
    next = []
    for(let i = 0; i < cur.length - 1; i++) {
      next.push((cur[i] + cur[i + 1]) % 10)
    }
    cur = next
  }

  return cur[0]
    
};
// @lc code=end

