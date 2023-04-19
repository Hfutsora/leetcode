/*
 * @lc app=leetcode.cn id=56 lang=typescript
 *
 * [56] 合并区间
 */
// @lc code=start
function merge(intervals: [number, number][]): [number, number][] {
  intervals.sort((a, b) => a[0] - b[0])

  const answer: [number, number][] = []

  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] <= intervals[i - 1][1])
        intervals[i] = [intervals[i - 1][0], Math.max(intervals[i - 1][1], intervals[i][1])]
    else
        answer.push(intervals[i - 1])
  }

  answer.push(intervals[intervals.length - 1])


  return answer
};

// @lc code=end

