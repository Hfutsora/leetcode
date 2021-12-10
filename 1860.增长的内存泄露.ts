/*
 * @lc app=leetcode.cn id=1860 lang=typescript
 *
 * [1860] 增长的内存泄露
 */

// @lc code=start
function memLeak(memory1: number, memory2: number): number[] {
  let i = 1;

  while(true) {
    if(i > Math.max(memory1, memory2)) {
      return [i, memory1, memory2];
    }

    if(memory1 >= memory2) {
      if(i <= memory1) {
        memory1 -= i;
      }
    } else if(memory1 < memory2) {
      if(i <= memory2) {
        memory2 -= i;
      }
    } 
    
    i += 1;
  }
}
// @lc code=end

