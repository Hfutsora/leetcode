/*
 * @lc app=leetcode.cn id=3516 lang=typescript
 *
 * [3516] 找到最近的人
 */

// @lc code=start
function findClosest(x: number, y: number, z: number): number {
  const left = Math.abs(x - z);
  const right = Math.abs(y - z);

  if (left === right) return 0

  return left < right ? 1 : 2;
};
// @lc code=end

