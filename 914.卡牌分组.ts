/*
 * @lc app=leetcode.cn id=914 lang=typescript
 *
 * [914] 卡牌分组
 */

// @lc code=start
function hasGroupsSizeX(deck: number[]): boolean {
  const multiObject = {};

  deck.forEach(card => {
    if (multiObject[card]) {
      multiObject[card] += 1;
    } else {
      multiObject[card] = 1;
    }
  });
 
  const values = [];
  for (const key in multiObject) {
    values.push(multiObject[key]);
  }

  const min = values.sort()[0];

  for (let i = 2; i <= min; i++) {
    const canGroup = values.every(value => value % i === 0);

    if (canGroup) {
      return true;
    }
  }

  return false;
}
// @lc code=end
