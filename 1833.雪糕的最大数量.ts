/*
 * @lc app=leetcode.cn id=1833 lang=typescript
 *
 * [1833] 雪糕的最大数量
 */

// @lc code=start
function maxIceCream(costs: number[], coins: number): number {
  const sortCosts = costs.sort((a, b) => a - b);
  let num = 0;
  let sum = 0;

  for(const curr of sortCosts) {
    if(sum + curr > coins) return num;

    sum += curr;
    num += 1;
  }

  return num;
};
// @lc code=end

