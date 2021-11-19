/*
 * @lc app=leetcode.cn id=1079 lang=typescript
 *
 * [1079] 活字印刷
 */

// @lc code=start
function numTilePossibilities(tiles: string): number {
  const tileMap = new Map();

  for(const tile of tiles) {
    if(tileMap.has(tile)) {
      tileMap.set(tile, tileMap.get(tile) + 1);
    } else {
      tileMap.set(tile, 1);
    }
  }

  return backTrack(tileMap);
};

function backTrack(tileMap: Map<string, number>): number {
  let solution = 0;

  for(let [tile, num] of tileMap) {
    
    if(num) {
      solution += 1;

      tileMap.set(tile, num - 1);
      solution += backTrack(tileMap);
      tileMap.set(tile, num);
    }
  }

  return solution;
}
// @lc code=end

