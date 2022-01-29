/*
 * @lc app=leetcode.cn id=1556 lang=typescript
 *
 * [1556] 千位分隔数
 */

// @lc code=start
function thousandSeparator(n: number): string {

  let char = (n + '').split('').reverse();
  let sum: string[] = [];

  for(let i = 0; i < char.length; i++) {
    if(i && (i + 1) % 3 === 0) {
      sum.unshift('.');
    }

    sum.unshift(char[n]);
  }

  return sum.join('');
};
// @lc code=end

