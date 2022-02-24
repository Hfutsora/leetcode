/*
 * @lc app=leetcode.cn id=917 lang=typescript
 *
 * [917] 仅仅反转字母
 */

// @lc code=start
function reverseOnlyLetters(s: string): string {
  const chars = s.split('');

  let head = 0;
  let tail = chars.length - 1;

  const charReg = /[A-Za-z]/;

  while(true) {
    while(!charReg.test(chars[head])) {
      head++;

      if (head >= tail) return chars.join('');
    }

    while(!charReg.test(chars[tail])) {
      tail--;
    }
  
    if (head >= tail) return chars.join('');

    const temp = chars[tail];
    chars[tail] = chars[head];
    chars[head] = temp;

    head++;
    tail--;
  }
};
// @lc code=end

