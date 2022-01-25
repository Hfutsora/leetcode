/*
 * @lc app=leetcode.cn id=1748 lang=typescript
 *
 * [1748] 唯一元素的和
 */

// @lc code=start
function sumOfUnique(nums: number[]): number {
  let sum = 0;
  const added = new Set<number>();
  const repeat = new Set<number>();

  for(const num of nums) {
    if(!repeat.has(num)) {
      sum += num;
      repeat.add(num);
      added.add(num);
    } else if(added.has(num)) {
      sum -= num;
      added.delete(num);
    }
  }

  return sum;
};
// @lc code=end

