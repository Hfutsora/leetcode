/*
 * @lc app=leetcode.cn id=717 lang=typescript
 *
 * [717] 1比特与2比特字符
 */

// @lc code=start
function isOneBitCharacter(bits: number[]): boolean {
  let i = bits.length - 2;

  while(i >= 0 && bits[i] > 0) {
    i --;
  }

  return (bits.length - i) % 2 == 0;
};
// @lc code=end

