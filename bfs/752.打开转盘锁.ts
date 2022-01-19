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
  let q1: string[] = [];
  let q2: string[] = [];
  const visited: Set<string> = new Set();

  q1.push('0000');
  q2.push(target);

  while(q1.length && q2.length) {
    const temp: string[] = [];

    const width = q1.length;

    for(let i = 0; i < width; i++) {
      const lock = q1.shift();

      if(visited.has(lock)) continue;

      if(q2.includes(lock)) return depth;
      visited.add(lock);

      for(let j = 0; j < lock.length; j++) {
        const up = plusOne(lock, j);
        const down = minusOne(lock, j);

        if(!visited.has(up) && !deadSet.has(up)) {
          temp.push(up);
        }
        if(!visited.has(down) && !deadSet.has(down)) {
          temp.push(down);
        }
      }
    }

    q1 = [...q2];
    q2 = [...temp];

    depth += 1;
  }

  return -1;
};
// @lc code=end

