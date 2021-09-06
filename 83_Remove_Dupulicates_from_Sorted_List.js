/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    const dummyHead = head;
    while (head && head.next !== null) {
        if (head.val === head.next.val) head.next = head.next.next;
        else head = head.next;
    }
    return dummyHead;
};
