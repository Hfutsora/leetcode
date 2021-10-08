/*
 * @lc app=leetcode.cn id=223 lang=typescript
 *
 * [223] 矩形面积
 */

// @lc code=start
function computeArea(ax1: number, ay1: number, ax2: number, ay2: number, bx1: number, by1: number, bx2: number, by2: number): number {
  
  const width = Math.min(ax2, bx2) - Math.max(ax1, bx1);
  const height = Math.min(ay2, by2) - Math.max(ay1, by1);
    
  let intersection: number;
  if(width <= 0 || height <= 0) {
    intersection = 0;
  } else {
    intersection = width * height;
  }

  return (ay2 - ay1) * (ax2 - ax1) + (by2 - by1) * (bx2 - bx1) - intersection;

};
// @lc code=end

