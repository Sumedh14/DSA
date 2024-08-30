/*
Remove Node From End of Linked List
You are given the beginning of a linked list head, and an integer n.

Remove the nth node from the end of the list and return the beginning of the list.

Input: head = [1,2,3,4], n = 2

Output: [1,2,4]

Input: head = [5], n = 1

Output: []

*/

const removeNthFromEnd = (head, n) => {
    let val = new ListNode(0, head);
    let cnt = 0;
    let curr = head;
    val.next = curr;
    while (curr) {
        cnt++;
        curr = curr.next;
    }
    let num = 0
    let pre = null;
    curr = head;
    while (num++ !== (cnt - n)) {
        pre = curr;
        curr = curr.next;
    }
    pre.next = curr.next;
    curr.next = null;
    return val.next;
}