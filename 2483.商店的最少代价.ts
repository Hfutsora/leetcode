/*
 * @lc app=leetcode.cn id=2483 lang=typescript
 *
 * [2483] 商店的最少代价
 */

// @lc code=start
function bestClosingTime(customers: string): number {
  let ans = 0
  let cost = customers.length
  let minCost = cost

  for (let i = 0; i < customers.length; i++) {
    if (customers[i] === 'Y') {
      cost--

      if (cost < minCost) { 
        minCost = cost
        ans = i + 1
      }
    } else {
      cost++
    }
  }

  return ans
};
// @lc code=end

