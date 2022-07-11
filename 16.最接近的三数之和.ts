/*
 * @lc app=leetcode.cn id=16 lang=typescript
 *
 * [16] 最接近的三数之和
 */

// @lc code=start
function threeSumClosest(nums: number[], target: number): number {
  let ans = Infinity
  let space = Infinity
  nums = nums.sort((a, b) => a - b)

  for(let i = 0; i < nums.length; i++) {
    // 双指针
    let j = i + 1, k = nums.length - 1
    
    while(j < k) {
      const sum = nums[i] + nums[j] + nums[k]

      if(sum === target) return sum

      if(sum < target) {
        j++
      }

      if(sum > target) {
        k--
      }

      const lsp = Math.abs(sum - target)
      if(lsp < space) {
        space = lsp
        ans = sum
      }
    }
  }

  return ans
};
// @lc code=end

