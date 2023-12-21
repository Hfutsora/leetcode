/*
 * @lc app=leetcode.cn id=326 lang=typescript
 *
 * [326] 3 的幂
 */

// @lc code=start
function isPowerOfThree(n: number): boolean {
  while(n && n % 3 === 0) {
    n = n / 3
  }

  return n === 1
}
// @lc code=end

