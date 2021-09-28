/*
 * @lc app=leetcode.cn id=1480 lang=typescript
 *
 * [1480] 一维数组的动态和
 */

// @lc code=start
function runningSum(nums: number[]): number[] {
  const sums: number[] = [];

  nums.reduce((a, b) => {
    const sum = a + b;

    sums.push(sum);

    return sum;
  }, 0);

  return sums;
};
// @lc code=end

