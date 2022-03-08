/*
 * @lc app=leetcode.cn id=1291 lang=typescript
 *
 * [1291] 顺次数
 */

// @lc code=start
function sequentialDigits(low: number, high: number): number[] {
  let result: number[] = [];

  function nextNum(pre: number) {
    const preS = String(pre);
    const preN = Number(preS[preS.length - 1]);

    if(preN === 9) return 0;

    return Number(preS + (preN + 1));
  }

  for(let i = 1; i < 10; i++) {
    let cur = i;

    if(cur > low && cur < high) {
      result.push(cur);
    }

    if(i === 9) {
      break;
    }

    while(cur = nextNum(cur)) {
      if(cur >= low) {
        if(cur <= high) {
          result.push(cur);
        } else {
          break;
        }
      }
    }
  }


  return result.sort((a, b) => a - b);
};
// @lc code=end

