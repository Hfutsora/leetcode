/*
 * @lc app=leetcode.cn id=5 lang=typescript
 *
 * [5] 最长回文子串
 */

// @lc code=start
function longestPalindrome(s: string): string {
  let longestS = ''; 

  for(let i = 0; i < s.length; i++) {
    if(s.length - i <= longestS.length) break;

    for(let j = s.length - 1; j > i; j--) {
      if(j - i + 1 <= longestS.length) break;

      const slice = s.slice(i, j + 1);
      if(isPlalindrome(slice)) {
        longestS = slice;
      }
    }
  }

  return longestS || s[0];

  function isPlalindrome(s: string): boolean {
    let start = 0;
    let end = s.length - 1;

    while(start < end) {
      if(s[start] !== s[end]) return false;

      start++;
      end--;
    }

    return true;
  }
};
// @lc code=end

