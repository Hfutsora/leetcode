/*
 * @lc app=leetcode.cn id=2365 lang=typescript
 *
 * [2365] 任务调度器 II
 */

// @lc code=start
function taskSchedulerII(tasks: number[], space: number): number {
  let day = 0
  let hash: Record<number, number> = {}

  for (const task of tasks) {
    day = Math.max(day + 1, hash[task] ?? 0)
    hash[task] = day + space + 1
  }

  return day
};
// @lc code=end

