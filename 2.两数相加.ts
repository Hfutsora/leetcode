export {};

/*
 * @lc app=leetcode.cn id=2 lang=typescript
 *
 * [2] 两数相加
 */

// @lc code=start
// Definition for singly-linked list.
// class ListNode {
//     val: number
//     next: ListNode | null
//     constructor(val?: number, next?: ListNode | null) {
//         this.val = (val===undefined ? 0 : val)
//         this.next = (next===undefined ? null : next)
//     }
// }

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  function dp(l1: ListNode | null, l2: ListNode | null, acc: number) {
    if(!l1 && !l2 && !acc) return null;
    const sum = (l1?.val ?? 0) + (l2?.val ?? 0) + acc;

    return new ListNode(sum % 10, dp(l1?.next ?? null, l2?.next ?? null, sum >= 10 ? 1 : 0))
  }

  return dp(l1, l2, 0);
};
// @lc code=end

