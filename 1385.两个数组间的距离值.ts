/*
 * @lc app=leetcode.cn id=1385 lang=typescript
 *
 * [1385] 两个数组间的距离值
 */

// @lc code=start
function findTheDistanceValue(arr1: number[], arr2: number[], d: number): number {
  return arr1.map(a => arr2.every(b => Math.abs(a - b) > d)).filter(Boolean).length;
};
// @lc code=end

