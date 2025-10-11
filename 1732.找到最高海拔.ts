/*
 * @lc app=leetcode.cn id=1732 lang=typescript
 *
 * [1732] 找到最高海拔
 */

// @lc code=start
function largestAltitude(gain: number[]): number {
    
  let cur = 0
  let max = 0

  for(const g of gain) {
    cur += g
    if (cur > max) max = cur
  }
  return max
};
// @lc code=end

