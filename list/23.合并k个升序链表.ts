/*
 * @lc app=leetcode.cn id=23 lang=typescript
 *
 * [23] 合并K个升序链表
 */

// Definition for singly-linked list.
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}
// @lc code=start

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  if(!lists.length) return null;

  return lists.reduce((p: ListNode[], n) => {
    while(n) {
      p.push(n);
      n = n.next;
    }

    return p;
  }, []).sort((a, b) => a.val - b.val).reduceRight((p, n) => (n.next = p, p = n, p), null);
}
// @lc code=end
