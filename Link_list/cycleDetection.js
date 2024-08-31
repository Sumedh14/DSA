/*
Linked List Cycle Detection
Given the beginning of a linked list head, return true if there is a cycle in the linked list. Otherwise, return false.
There is a cycle in a linked list if at least one node in the list that can be visited again by following the next pointer.
Internally, index determines the index of the beginning of the cycle, if it exists. The tail node of the list will set it's next pointer to the index-th node. If index = -1, then the tail node points to null and no cycle exists.

*/


const cycleDetection = (head) => {
    let slow = head;
    let fast = head;
    while (fast !== null && fast.next !== null) {
        if (fast.next === slow) {
            return true;
        }
        slow = slow.next;
        fast = fast.next.next;

    }
    return false;
}