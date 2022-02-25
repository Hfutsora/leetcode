/*
 * @lc app=leetcode.cn id=1362 lang=typescript
 *
 * [1362] 最接近的因数
 */

// @lc code=start
function closestDivisors(num: number): number[] {
  let sqrtOne = Math.floor(Math.sqrt(num + 1));
  let sqrtTwo = Math.floor(Math.sqrt(num + 2));

  let rOne = getResult(sqrtOne, num + 1);
  let rTwo = getResult(sqrtTwo, num + 2);

  function getResult(sqrt: number, num: number) {
    let result: [number, number] = [0, 0];
    while(sqrt >= 1) {
      if(num % sqrt === 0) {
        result = [sqrt, num / sqrt];
        break;
      }
      sqrt--;
    }
    return result;
  }

  const absOne = Math.abs(rOne[1] - rOne[0]);
  const absTwo = Math.abs(rTwo[1] - rTwo[0]);

  return absOne > absTwo ? rTwo : rOne;
};
// @lc code=end

