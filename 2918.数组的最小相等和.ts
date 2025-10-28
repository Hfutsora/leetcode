/*
 * @lc app=leetcode.cn id=2918 lang=typescript
 *
 * [2918] 数组的最小相等和
 */

// @lc code=start
function minSum(nums1: number[], nums2: number[]): number {
  const getSum = (nums: number[]) => nums.reduce<{ sum: number, zero: number }>((acc, cur) => {
    return {
      sum: acc.sum + cur,
      zero: acc.zero + (cur === 0 ? 1 : 0)
    }
  }, { sum: 0, zero: 0 })
  
  const sum1 = getSum(nums1)
  const sum2 = getSum(nums2)

  sum1.sum = sum1.sum + sum1.zero
  sum2.sum = sum2.sum + sum2.zero

  if (sum1.sum === sum2.sum) return sum1.sum
  if (sum1.sum > sum2.sum) {
    if (!sum2.zero) return -1
    return sum1.sum
  }

  if (!sum1.zero) return -1
  return sum2.sum
};
// @lc code=end

