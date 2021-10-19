/*
 * @lc app=leetcode.cn id=1304 lang=typescript
 *
 * [1304] 和为零的N个唯一整数
 */

// @lc code=start
function sumZero(n: number): number[] {
  if (n === 1) {
    return [0];
  }

  const ans: number[] = [];
  let count: number;

  if (n % 2) {
    count = (n - 1) / 2;
    ans.push(0);
  } else {
    count = n / 2;
  }

  for (let i = 0; i < count; i++) {
    ans.push(i + 1);
    ans.push(-(i + 1));
  }

  return ans;
}
// @lc code=end
