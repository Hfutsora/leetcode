/*
 * @lc app=leetcode.cn id=498 lang=typescript
 *
 * [498] 对角线遍历
 */

// @lc code=start
function findDiagonalOrder(mat: number[][]): number[] {
  const result: number[] = []

  const p = { x: 1, y: 0 }

  const width = mat[0].length
  const height = mat.length
  const size = width * height

  let d: 1 | -1 = 1

  while(size !== result.length) {
    const row = mat[p.y]
    if (row) {
      const cell = row[p.x - 1]
      if (cell !== undefined) {
        result.push(cell)
      }
    }

    if (d === 1) {
      if (p.x === width) {
        p.y += 1
        d = -1
      } else if (p.y === 0) {
        p.x += 1
        d = -1
      } else {
        p.x += 1
        p.y -= 1
      }
    } else {
      if (p.x === 0) {
        p.y += 1
        d = 1
      } else if (p.y === height - 1) {
        p.x += 1
        d = 1
      } else {
        p.x -= 1
        p.y += 1
      }
    }
  }

  return result
};
// @lc code=end

