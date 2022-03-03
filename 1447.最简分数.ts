/*
 * @lc app=leetcode.cn id=1447 lang=typescript
 *
 * [1447] 最简分数
 */

// @lc code=start
function simplifiedFractions(n: number): string[] {
  const fracSet = new Set<string>();

  const gcd = (a: number, b: number) => {
    if (b === 0) {
      return a;
    }
    return gcd(b, a % b);
  };

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j < i; j++) {
      if (gcd(i, j) === 1) {
        fracSet.add(`${j}/${i}`);
      }
    }
  }

  return Array.from(fracSet);
}
// @lc code=end
