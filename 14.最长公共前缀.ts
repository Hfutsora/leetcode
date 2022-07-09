/*
 * @lc app=leetcode.cn id=14 lang=typescript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
function longestCommonPrefix(strs: string[]): string {
  if(!strs.length) return ''
  if(strs.length === 1) return strs[0]

  let answer = strs.shift()
  let next = ''

  while(next = strs.shift(), next !== undefined) {
    answer = getPrefix(next, answer)

    if(!answer) return ''
  }

  function getPrefix(s: string, a: string): string {
    let na = ''
    
    for(let i = 0; i < a.length; i++) {
      if(i >= s.length || s[i] !== a[i]) return na

      na += a[i]
    }

    return na
  }

  return answer
};
// @lc code=end

