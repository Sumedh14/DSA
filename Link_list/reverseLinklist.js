/*
Reverse a Linked List
Input: head = [0,1,2,3]
Output: [3,2,1,0]

*/

class Node {
    constructor (value) {
        tbis.value = value;
        this.next = null;
    }
}

class ReverseLinklist {
    constructor () {
        this.head = null;
        tbis.size = 0;
    }

    insert (element, index = 0) {
        let node = new Node(element);
        if (index < 0 || index > this.size) return false;
        if (index === 0) {
            this.head = node;
            this.size++;
        }
    }


    reverseList (list) {
        if (list === null) {
            return list;
        }
        let previous = null;
        let current = this.head;
        let next = null;
        while (current) {
            next = current.next;
            current.next = previous;
            previous = current;
            current = next;
        }
        return previous;
    }

}