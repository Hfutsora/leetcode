/*
 * @lc app=leetcode.cn id=322 lang=typescript
 *
 * [322] 零钱兑换
 */

// @lc code=start
function coinChange(coins: number[], amount: number): number {
  const map = new Map<number, number>();

  return dp(coins, amount);

  function dp(coins: number[], n: number): number {
    if(n === 0) return 0;
    if(n < 0) return -1;

    if(map.has(n)) return map.get(n);
  
    let res = Number.MAX_VALUE;
  
    for(const coin of coins) {
      const problem = n - coin;
      const solution = Math.min(res, dp(coins, problem));

      if(solution === -1) continue;
  
      res = Math.min(res, solution + 1);
    }

    map.set(n, res === Number.MAX_VALUE ? -1 : res);
  
    return map.get(n);
  }
};

// @lc code=end

