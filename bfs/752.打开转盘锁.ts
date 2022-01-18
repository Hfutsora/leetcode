/*
 * @lc app=leetcode.cn id=752 lang=typescript
 *
 * [752] 打开转盘锁
 */

// @lc code=start
function plusOne(s: string, j: number): string {
  const nums = [...s];

  if(Number(nums[j]) === 9) {
    nums[j] = '0';
  } else {
    nums[j] = String(Number(nums[j]) + 1);
  }

  return nums.join('');
}

function minusOne(s: string, j: number): string {
  const nums = [...s];

  if(Number(nums[j]) === 0) {
    nums[j] = '9';
  } else {
    nums[j] = String(Number(nums[j]) - 1);
  }

  return nums.join('');
}


function openLock(deadends: string[], target: string): number {
  const deadSet = new Set(deadends);
  if(deadSet.has(target) || deadSet.has('0000')) return -1;

  let depth = 0;
  const queue: string[] = [];
  const visited: Set<string> = new Set();

  queue.push('0000');

  while(queue.length) {
    const width = queue.length;

    for(let i = 0; i < width; i++) {
      const lock = queue.shift();

      if(lock === target) return depth;

      for(let j = 0; j < lock.length; j++) {
        const up = plusOne(lock, j);
        const down = minusOne(lock, j);

        if(!visited.has(up) && !deadSet.has(up)) {
          queue.push(up);
          visited.add(up);
        }
        if(!visited.has(down) && !deadSet.has(down)) {
          queue.push(down);
          visited.add(down);
        }
      }
    }

    depth += 1;
  }

  return -1;
};
// @lc code=end

