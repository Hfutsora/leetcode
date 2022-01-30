/*
 * @lc app=leetcode.cn id=9 lang=typescript
 *
 * [9] 回文数
 */

// @lc code=start
function isPalindrome(x: number): boolean {
  const char = String(x);
  let isEven = char.length % 2 === 0;

  let width = isEven ? char.length / 2 : (char.length - 1) / 2;

  for(let i = 0; i < width; i++) {
    if(char[i] !== char[char.length - 1 -i]) return false;
  }

  return true;
};
// @lc code=end

