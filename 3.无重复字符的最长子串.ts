/*
 * @lc app=leetcode.cn id=3 lang=typescript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
function lengthOfLongestSubstring(s: string): number {
  let max = 0
  const nums: string[] = []

  for(let char of s) {
    while(nums.includes(char)) {
      nums.shift()
    }

    nums.push(char)
    max = Math.max(max, nums.length)
  }
  
  return max;
};
// @lc code=end

