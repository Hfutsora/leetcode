/*
 * @lc app=leetcode.cn id=682 lang=typescript
 *
 * [682] 棒球比赛
 */

// @lc code=start
function calPoints(ops: string[]): number {
  const score: number[] = [];

  for(const op of ops) {
    switch (op) {
      case '+': {
        score.push(score[score.length - 1] + score[score.length - 2]);

        break;
      }

      case 'D': {
        score.push(score[score.length - 1] * 2);

        break;
      }

      case 'C': {
        score.pop();

        break;
      }

      default: {
        score.push(+op);
      }
    }
  }

  return score.reduce((a,b) => a + b, 0);
};
// @lc code=end

