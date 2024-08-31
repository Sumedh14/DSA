/*
Add Two Numbers
You are given two non-empty linked lists, l1 and l2, where each represents a non-negative integer.
The digits are stored in reverse order, e.g. the number 123 is represented as 3 -> 2 -> 1 -> in the linked list.
Each of the nodes contains a single digit. You may assume the two numbers do not contain any leading zero, except the number 0 itself.
Input: l1 = [1,2,3], l2 = [4,5,6]

Output: [5,7,9]

Explanation: 321 + 654 = 975.
*/

const addNumber = (list1, list2) => {
    let newlist = new LinkedList();
    let current = newlist;

    let carry = 0
    while (list1 || list2 || carry) {
        const newNode = new ListNode();
        let l1 = list1 ? list1.value : 0;
        let l2 = list2 ? list2.value : 0;

        let value = value1 + value2 + carry;
        carry = Math.floor(value / 10);
        value = value % 10;
        newNode.val = value;
        current.next = newNode;

        current = current.next;
        list1 = list1 ? list1.next : null;
        list2 = list2 ? list2.next : null;

    }
    return newlist.next;
}