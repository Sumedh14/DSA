

const reorderList = (list) => {
    let slow = list;
    let fast = list;
    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }

    let list2 = slow.next;
    slow.next = null;
    let prev = null;

    while (list2 !== null) {
        let temp = list2.next;
        list2.next = prev;
        prev = list2;
        list2 = temp;
    }

    let list1 = list;
    let n = { value: 0, next: null };
    n.next = list1;
    list2 = prev;
    while (list2 !== null) {

        let t1 = list1.next;
        let t2 = list2.next;
        list1.next = list2;
        list2.next = t1;
        list2 = t2;
        list1 = t1;
    }
    return n.next;
}