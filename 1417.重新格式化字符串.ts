/*
 * @lc app=leetcode.cn id=1417 lang=typescript
 *
 * [1417] 重新格式化字符串
 */

// @lc code=start
function reformat(s: string): string {
  const chars: string[] = [];
  const numbers: string[] = [];

  for(const char of s) {
    if(isNaN(+char)) {
      chars.push(char);
    } else {
      numbers.push(char);
    }
  }

  if(Math.abs(chars.length - numbers.length) > 1) {
    return '';
  }

  let result = '';

  let bl: string[];
  let sl: string[];

  if(chars.length > numbers.length) {
    bl = chars;
    sl = numbers;
  } else {
    bl = numbers;
    sl = chars;
  }

  for(let i = 0; i < bl.length; i++) {
    result += bl[i];
    
    if(sl[i]) {
      result += sl[i];
    }
  }

  return result;
};
// @lc code=end

