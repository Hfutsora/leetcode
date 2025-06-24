/*
 * @lc app=leetcode.cn id=274 lang=typescript
 *
 * [274] H 指数
 */

// @lc code=start
function hIndex(citations: number[]): number {
  let max = 0
  const cs = citations.sort((a, b) => a - b)

  for (let i = 0; i < cs.length; i++) {
    if (cs.length - i > max) max = cs.length - i

    if (cs.length - i >= cs[i]) max = cs[i]
    if (cs[i] > cs.length - i) return max
  }

  return max
};
// @lc code=end

