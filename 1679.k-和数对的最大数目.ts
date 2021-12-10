/*
 * @lc app=leetcode.cn id=1679 lang=typescript
 *
 * [1679] K 和数对的最大数目
 */

// function maxOperations(nums: number[], k: number): number {
//   let answer = 0;

//   nums = nums.sort();

//   const uselessSet: Set<number> = new Set();
//   let removeIndex: number = -1;

//   while(nums.length) {
//     if(removeIndex >= 0) {
//       nums.splice(0, 1);
//       nums.splice(removeIndex - 1, 1);
//       removeIndex = -1;
//     }

//     if(nums.length <= 1) {
//       return answer;
//     }

//     nums = nums.filter(num => !uselessSet.has(num));

//     for(let i = 1; i < nums.length; i ++) {
//       if(i > 1 && nums[i] === nums[i -1] && !(i === nums.length - 1)) {
//         continue;
//       }

//       if(nums[0] + nums[i] === k) {
//         answer += 1;
//         removeIndex = i;

//         break;
//       }

//       if(i === nums.length - 1) {
//         uselessSet.add(nums[0]);

//         break;
//       }
//     }
//   }

//   return answer;
// };

// function maxOperations(nums: number[], k: number): number {
//   let answer = 0;

//   const numMap = new Map();
//   const numSet = Array.from(new Set(nums));

//   for(const num of nums) {
//     const getNum = numMap.get(num) || 0;

//     numMap.set(num, getNum + 1);
//   }

//   while(numMap.size >= 1) {
//     let find = false;

//     for(let i = 1; i < numSet.length; i++) {
//       if(numSet[0] + numSet[i] === k) {
//         find = true; 
//         answer += Math.min(numMap.get(numSet[0]), numMap.get(numSet[i]));

//         numMap.delete(numSet[0]);
//         numMap.delete(numSet[i]);

//         numSet.splice(0 ,1);
//         numSet.splice(i - 1 ,1);

//         break;
//       }
//     }

//     if(!find) {
//       const current = numSet[0];

//       if(current + current === k) {
//         answer += Math.floor(numMap.get(current) / 2);
//       }

//       numMap.delete(numSet[0]);
//       numSet.splice(0 ,1);
//     }
//   }

//   return answer;
// };

// @lc code=start
function maxOperations(nums: number[], k: number): number {
  let answer = 0;
  const sort = nums.sort((a ,b) => a - b);

  let i = 0;
  let j = nums.length - 1;

  while(i < j) {
    const sum = sort[i] + sort[j];

    if(sum === k) {
      answer += 1;
      i += 1;
      j -= 1;
    } else if (sum > k) {
      j -= 1;
    } else {
      i += 1;
    }
  }

  return answer;
}
// @lc code=end

