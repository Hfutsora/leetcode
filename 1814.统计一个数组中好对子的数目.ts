/*
 * @lc app=leetcode.cn id=1814 lang=typescript
 *
 * [1814] 统计一个数组中好对子的数目
 */

// @lc code=start
function countNicePairs(nums: number[]): number {
  const mod = 1e9 + 7;
  const map = new Map();

  for (let i = 0; i < nums.length ; i++) {
    const key = nums[i] - rev(nums[i]);
    map.set(key, map.get(key) ? map.get(key) + 1 : 1);
  }

  function rev(num: number) {
    let result = 0;
    while (num) {
      result = result * 10 + (num % 10)
      num = Math.floor(num / 10)
    }

    return result;
  }

  let result = 0;

  map.forEach((value) => {
    result = (result + (value) * (value - 1) / 2) % mod;
  })

  return (result % mod);
};
// @lc code=end
