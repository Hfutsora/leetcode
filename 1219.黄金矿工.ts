/*
 * @lc app=leetcode.cn id=1219 lang=typescript
 *
 * [1219] 黄金矿工
 */

// [[0,6,0],
//  [5,8,7],
//  [0,9,0]]

// @lc code=start
type GMap = Map<string, number>;

function getMaximumGold(grid: number[][]): number {
  const h = grid.length;
  const w = grid[0].length;
  const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];
  let max = 0, temp = 0;

  const mining = function (x: number, y: number): void {
      if (grid[x][y] === 0) {
          max = Math.max(max, temp);
          return;
      }
      let prev = grid[x][y];
      temp += grid[x][y];
      grid[x][y] = 0;
      for (const [dx, dy] of directions) {
          if (x + dx < 0 || y + dy < 0 || x + dx >= h || y + dy >= w) continue;
          mining(x + dx, y + dy);
      }
      grid[x][y] = prev;
      temp -= grid[x][y];
  }

  for (let i = 0; i < h; i++) {
      for (let j = 0; j < w; j++) {
          if (grid[i][j] === 0) continue;
          mining(i, j);
      }
  }
  return max;
};

// @lc code=end

