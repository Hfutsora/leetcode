/*
 * @lc app=leetcode.cn id=40 lang=typescript
 *
 * [40] 组合总和 II
 */

// @lc code=start
function combinationSum2(candidates: number[], target: number): number[][] {
  const answers: number[][] = [];

  function dp(ls: number[], target: number, uses: number[]) {
    if(target === 0) {
      answers.push(uses);
    } else if(target > 0) {
      for(let i = 0; i < ls.length; i++) {
        if(i > 0 && ls[i] === ls[i - 1]) {
          // skip same case
        } else {
          dp(ls.slice(i + 1), target - ls[i], [...uses, ls[i]]);
        }
      }
    }
  }

  dp(candidates.sort((a, b) => a - b), target, []);

  return answers;
};
// @lc code=end

