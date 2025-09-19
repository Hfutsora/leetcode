/*
 * @lc app=leetcode.cn id=2208 lang=typescript
 *
 * [2208] 将数组和减半的最少操作次数
 */

// @lc code=start
function halveArray(nums: number[]): number {
  // 初始总和
  const sum = nums.reduce((a, b) => a + b, 0);
  const target = sum / 2;

  // 优先队列：最大堆
  class MaxHeap {
    private heap: number[];
    constructor(arr: number[]) {
      this.heap = [];
      arr.forEach(v => this.push(v));
    }

    private swap(i: number, j: number) {
      [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    private up(i: number) {
      while (i > 0) {
        const parent = Math.floor((i - 1) / 2);
        if (this.heap[i] <= this.heap[parent]) break;
        this.swap(i, parent);
        i = parent;
      }
    }

    private down(i: number) {
      const n = this.heap.length;
      while (true) {
        let largest = i;
        const left = 2 * i + 1;
        const right = 2 * i + 2;
        if (left < n && this.heap[left] > this.heap[largest]) largest = left;
        if (right < n && this.heap[right] > this.heap[largest]) largest = right;
        if (largest === i) break;
        this.swap(i, largest);
        i = largest;
      }
    }

    push(x: number) {
      this.heap.push(x);
      this.up(this.heap.length - 1);
    }

    pop(): number | undefined {
      if (this.heap.length === 0) return undefined;
      const top = this.heap[0];
      const last = this.heap.pop()!;
      if (this.heap.length > 0) {
        this.heap[0] = last;
        this.down(0);
      }
      return top;
    }

    top(): number | undefined {
      return this.heap[0];
    }
  }

  const heap = new MaxHeap(nums);

  let reduced = 0;
  let ops = 0;

  while (reduced < target) {
    const maxVal = heap.pop()!;
    const half = maxVal / 2;
    reduced += half;
    heap.push(half);
    ops++;
  }

  return ops;
}

// @lc code=end

