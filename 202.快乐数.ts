/*
 * @lc app=leetcode.cn id=202 lang=typescript
 *
 * [202] 快乐数
 */

// @lc code=start
function isHappy(n: number): boolean {
  const visited = new Set<number>();
  let last = n;

  while (!visited.has(last)) {
    const charList = String(last).split('').map(x => Number(x));
    const newNum = charList.reduce((prev, curr) => prev + curr * curr, 0);

    if(newNum === 1) return true;

    visited.add(last);
    last = newNum;
  }

  return false;
}
// @lc code=end
