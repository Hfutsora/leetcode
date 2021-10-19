/*
 * @lc app=leetcode.cn id=1304 lang=typescript
 *
 * [1304] 和为零的N个唯一整数
 */

// @lc code=start
function sumZero(n: number): number[] {
  const ans: number[] = [];

  if (n % 2) {
    ans.push(0);
  }

  for (let i = 1; i <= n / 2; i++) {
    ans.push(i);
    ans.push(-i);
  }
 return ans;
}
// @lc code=end
