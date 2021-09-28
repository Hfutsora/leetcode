/*
 * @lc app=leetcode.cn id=1338 lang=typescript
 *
 * [1338] 数组大小减半
 */

// @lc code=start
function minSetSize(arr: number[]): number {
  let object: { [key: number]: number } = {};

  for (const temp of arr) {
    if (object[temp]) {
      object[temp] += 1;
    } else {
      object[temp] = 1;
    }
  }

  const leftArray = Object.values(object).sort((a, b) => b - a);

  const half = arr.length / 2;
  let sum = 0;

  for(let i = 0; i < leftArray.length; i++) {
    const current = leftArray[i];

    sum += current;

    if(sum >= half) {
      return i + 1;
    }
  }

  return leftArray.length;
}
// @lc code=end
