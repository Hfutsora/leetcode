/*
 * @lc app=leetcode.cn id=962 lang=typescript
 *
 * [962] 最大宽度坡
 */

// @lc code=start
// function maxWidthRamp(nums: number[]): number {
//   let max = 0;
//   const lastIndex = nums.length - 1;

//   for(let i = 0; i < lastIndex; i++) {
//     if(i >= lastIndex - max) {
//       return max;
//     }

//     for(let j = lastIndex; j > i; j--) {
//       if(j - i <= max) {
//         continue;
//       }

//       if(nums[j] >=  nums[i]) {
//         if(j - i > max) {
//           max = j - i;
//         }

//         continue;
//       }
//     }
//   }

//   return max;
// };


function maxWidthRamp(nums: number[]): number {
  let max = 0;
  const decreasArray: number[] = [];

  for(let i = 0; i < nums.length; i++) {
    if(!decreasArray.length || nums[i] < nums[decreasArray[decreasArray.length - 1]]) {
      decreasArray.push(i);
    }
  }

  for(let i = nums.length - 1; i > 0; i--) {
    while(decreasArray.length && nums[i] >= nums[decreasArray[decreasArray.length - 1]]) {
      const index = decreasArray.pop();
      if(i - index > max) {
        max = i - index;
      }
    }
  }

  return max;
};
// @lc code=end

