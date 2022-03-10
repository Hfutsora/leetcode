/*
 * @lc app=leetcode.cn id=120 lang=typescript
 *
 * [120] 三角形最小路径和
 */

// @lc code=start
function minimumTotal(triangle: number[][]): number {
  let map = new Map<string, number>();

  const deep = triangle.length - 1;

  function dp(row: number, column: number) {
    if(row === deep) { // at bottom
      return triangle[row][column];
    } else {
      const mapKey = `${row}-${column}`;
      if(map.has(mapKey)) {
        return map.get(mapKey);
      }

      let left = dp(row + 1, column);
      let right = dp(row + 1, column + 1);

      const min = Math.min(left, right) + triangle[row][column];
      map.set(mapKey, min);

      return min;
    }
  }

  return dp(0, 0);
};
// @lc code=end

