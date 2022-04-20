/*
 * @lc app=leetcode.cn id=3 lang=typescript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
function lengthOfLongestSubstring(s: string): number {
  if(s.length < 2) return s.length;

  let max = 0

  for(let i = 0; i < s.length - 1; i++) {
    for(let j = i + 1; j < s.length; j++) {
      const substring = s.substring(i, j + 1);
      let isNotRAtLast = false;

      if(isNotR(isNotRAtLast, substring)) {
        max = Math.max(max, substring.length);
        isNotRAtLast = true;
      } else {
        break;
      }
    }
  }

  function isNotR(isNotRAtLast: boolean, s: string) {
    if(isNotRAtLast) return s[s.length - 1] !== s[0];

    const set = new Set<string>();

    for(let char of s) {
      if(set.has(char)) return false

      set.add(char)
    }

    return true;
  }

  return max || 1;
};
// @lc code=end

