/*
 * @lc app=leetcode.cn id=509 lang=typescript
 *
 * [509] 斐波那契数
 */

// @lc code=start
function fib(n: number): number {
  if(n < 1) return 0;
  if(n === 1 || n === 2) return 1;

  let prev = 1;
  let curr = 1;

  for(let i = 3; i <= n; i++) {
    const sum = prev + curr;
    prev = curr;
    curr = sum;
  }

  return curr;
};
// @lc code=end

