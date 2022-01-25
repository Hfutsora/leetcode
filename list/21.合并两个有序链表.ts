/*
 * @lc app=leetcode.cn id=21 lang=typescript
 *
 * [21] 合并两个有序链表
 */
export {};

// Definition for singly-linked list.
class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
  }
}
// @lc code=start
function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  const node: ListNode | null = new ListNode();
  let next: ListNode | null = node;

  if(!list1) return list2;
  if(!list2) return list1;

  let p1 = list1;
  let p2 = list2;

  while(p1 !== null && p2 !== null) {
    if(p1.val > p2.val) {
      next.next = p2;
      p2 = p2.next;
    } else {
      next.next = p1;
      p1 = p1.next;
    }

    next = next.next;
  }
  
  if(p1 !== null) {
    next.next = p1;
  }

  if(p2 !== null) {
    next.next = p2;
  }

  return node.next;
};
// @lc code=end

