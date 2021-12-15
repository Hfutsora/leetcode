/*
 * @lc app=leetcode.cn id=567 lang=typescript
 *
 * [567] 字符串的排列
 */

// @lc code=start
function checkInclusion(s1: string, s2: string): boolean {
  if(s1.length > s2.length) return false;

  const cnt = new Array(26).fill(0);

  const codeA = 'a'.charCodeAt(0);

  for(let i = 0; i < s1.length; i++) {
    ++cnt[s1[i].charCodeAt(0) - codeA];
    --cnt[s2[i].charCodeAt(0) - codeA];
  }

  let diff = 0;

  for(const c of cnt) {
    if(c) {
      diff++;
    }
  }

  if(!diff) {
    return true;
  }

  for(let i = s1.length; i < s2.length; i++) {
    const x = s2[i - s1.length].charCodeAt(0) - codeA;
    const y = s2[i].charCodeAt(0) - codeA;

    if(x===y) {
      continue;
    }

    if(cnt[x] === 0) {
      ++diff;
    }

    ++cnt[x];

    if(cnt[x] === 0) {
      --diff;
    }

    if(cnt[y] === 0) {
      ++diff;
    }

    --cnt[y];

    if(cnt[y] === 0) {
      --diff;
    }

    if(!diff) {
      return true;
    }
  }

  return false;
};
// @lc code=end

