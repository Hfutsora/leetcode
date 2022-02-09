/*
 * @lc app=leetcode.cn id=200 lang=typescript
 *
 * [200] 岛屿数量
 */

// @lc code=start
function numIslands(grid: string[][]): number {
  let count = 0;

  for(let i = 0; i < grid.length; i++) {
    for(let j = 0; j < grid[0].length; j++) {
      if(grid[i][j] === '1') {
        count += 1;

        dfs(grid, i, j);
      }
    }
  }

  return count;
};

const dirs: [number, number][] = [[-1, 0], [1, 0], [0, -1], [0, 1]];

function dfs(grid: string[][], i: number, j: number) {
  if(i < 0 || i >= grid.length || j < 0 || j >= grid[0].length) return;

  if(grid[i][j] === '0') return;

  grid[i][j] = '0';

  for(const dir of dirs) {
    dfs(grid, i + dir[0], j + dir[1]);
  }
}
// @lc code=end

