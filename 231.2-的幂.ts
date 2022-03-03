/*
 * @lc app=leetcode.cn id=231 lang=typescript
 *
 * [231] 2 的幂
 */

// @lc code=start
function isPowerOfTwo(n: number): boolean {
  let start = 1;

  while(start <= n) {
    if(start === n) return true;

    start *= 2;
  }

  return false;
};
// @lc code=end

