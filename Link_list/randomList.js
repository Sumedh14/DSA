/*

Copy Linked List with Random Pointer

You are given the head of a linked list of length n. Unlike a singly linked list, each node contains an additional pointer random, which may point to any node in the list, or null.
Create a deep copy of the list.
The deep copy should consist of exactly n new nodes, each including:

The original value val of the copied node
A next pointer to the new node corresponding to the next pointer of the original node
A random pointer to the new node corresponding to the random pointer of the original node
Note: None of the pointers in the new list should point to nodes in the original list.

Return the head of the copied linked list.

In the examples, the linked list is represented as a list of n nodes. Each node is represented as a pair of [val, random_index] where random_index is the index of the node (0-indexed) that the random pointer points to, or null if it does not point to any node.

Example 1:
Input: head = [[3,null],[7,3],[4,0],[5,1]]

Output: [[3,null],[7,3],[4,0],[5,1]]
*/


const deepCopy = (head) => {
    const newList = new Map();
    newList.set(null, null);
    let curr = head;
    while (curr) {
        let newNode = new LinkedList(curr.value);
        newList.set(curr, newNode);
        curr = curr.next;
    }
    curr = head;

    while (curr) {
        let copyNode = newList.get(curr);
        copyNode.next = newList.get(curr.next);
        copyNode.random = newList.get(curr.random);
        curr = curr.next;
    }
    return newList.get(head);
}