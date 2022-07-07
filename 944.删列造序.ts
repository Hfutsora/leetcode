/*
 * @lc app=leetcode.cn id=944 lang=typescript
 *
 * [944] 删列造序
 */

// @lc code=start
function minDeletionSize(strs: string[]): number {
  if(!strs.length || !strs[0].length) return 0

  let strss: string[][] = strs.map(s => s.split(''));
  const len = strs[0].length

  let nums: number[][] = [];
  for(let c = 0; c < len; c++) {
    let arr: number[] = []
    for(let r = 0; r < strss.length; r++) {
      arr.push(strss[r][c].charCodeAt(0))
    }
    nums.push(arr)
  }

  function isNotIns(nums: number[]): boolean {
    for(let i = 1; i < nums.length; i++) {
      if(nums[i] < nums[i - 1]) return true
    }

    return false
  }

  return nums.filter(isNotIns).length
};
// @lc code=end

