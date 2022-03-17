/*
 * @lc app=leetcode.cn id=1089 lang=typescript
 *
 * [1089] 复写零
 */

// @lc code=start
/**
 Do not return anything, modify arr in-place instead.
 */
function duplicateZeros(arr: number[]): void {
  let repeat: boolean = false;

  for(let i = 0; i < arr.length; i++) {
    if(repeat) {
      repeat = false;
      continue;
    };

    if(arr[i] === 0 && i + 1 < arr.length) {
      for(let j = arr.length - 1; j > i + 1; j--) {
        arr[j] = arr[j - 1];
      }

      arr[i + 1] = 0;
      repeat = true;
    }
  }
};
// @lc code=end

