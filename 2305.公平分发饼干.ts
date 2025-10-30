/*
 * @lc app=leetcode.cn id=2305 lang=typescript
 *
 * [2305] 公平分发饼干
 */

// @lc code=start
function distributeCookies(cookies: number[], k: number): number {
  const n = cookies.length;
  if (k >= n) return Math.max(...cookies); // 每人至多一包

  // 降序排序，优先分配大包以便更快触发剪枝
  cookies.sort((a, b) => b - a);

  const sums = new Array<number>(k).fill(0);
  let best = Infinity;

  // 递归分配第 idx 包
  function dfs(idx: number) {
    if (idx === n) {
      // 所有包分配完，计算当前最大值并尝试更新 best
      const curMax = Math.max(...sums);
      if (curMax < best) best = curMax;
      return;
    }

    const val = cookies[idx];

    for (let i = 0; i < k; i++) {
      // 剪枝：如果当前分配会使 sums[i] >= best，则没有必要继续
      if (sums[i] + val >= best) continue;

      // 做出选择
      sums[i] += val;
      dfs(idx + 1);
      sums[i] -= val;

      // 去重：如果当前孩子原来是空的（分配前 sums[i] === 0），
      // 尝试把当前包分给其他也空的孩子是对称的，直接跳出即可
      if (sums[i] === 0) break;
    }
  }

  dfs(0);
  return best === Infinity ? 0 : best;
}
// @lc code=end

