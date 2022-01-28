/*
 * @lc app=leetcode.cn id=551 lang=typescript
 *
 * [551] 学生出勤记录 I
 */

// @lc code=start
function checkRecord(s: string): boolean {
  let A = 0;
  let L = 0;

  for(const char of s) {
    if(char === 'L') {
      L += 1;

      if(L >= 3) return false;
    } else {
      L = 0;

      if(char === 'A') {
        A += 1;
  
        if(A >= 2) return false;
      }
    }
  }

  return true;
};
// @lc code=end

