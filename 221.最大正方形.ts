/*
 * @lc app=leetcode.cn id=221 lang=typescript
 *
 * [221] 最大正方形
 */

// @lc code=start
function maximalSquare(matrix: string[][]): number {
  if(matrix.length === 0 || matrix[0].length === 0) return 0;

  let max = 0;

  const num_matrix = matrix.map(row => row.map(c => Number(c)));
 
  for(let i = 0; i < matrix.length; i++) {
    for(let j = 0; j < matrix[0].length; j++) {
      if(num_matrix[i][j]) {
        if(i === 0 || j === 0) {
          // pass
        } else {
          num_matrix[i][j] = Math.min(num_matrix[i - 1][j - 1], num_matrix[i][j - 1], num_matrix[i - 1][j]) + 1;
        }
        
        max = Math.max(max, num_matrix[i][j]);
      }
    }
  }

  return max * max;
};
// @lc code=end

