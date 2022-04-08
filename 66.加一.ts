/*
 * @lc app=leetcode.cn id=66 lang=typescript
 *
 * [66] 加一
 */

// @lc code=start
function plusOne(digits: number[]): number[] {
  const result: number[] = [];
  let plus = true;

  while(digits.length) {
    const tail = digits.pop();

    if(plus) {
      if(tail === 9) {
        result.unshift(0);
      } else {
        plus = false;
        result.unshift(tail + 1);
      }
    } else {
      result.unshift(tail);
    }
  }

  if(plus) result.unshift(1);

  return result;
};
// @lc code=end

