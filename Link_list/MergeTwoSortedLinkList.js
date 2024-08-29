class MergeList {
    mergeTwolist (list1, list2) {
        const n = { value: 0, next: null };
        let node = n
        while (list1 && list2) {
            if (list1.value < list2.value) {
                node.next = list1;
                list1 = list1.next;
            } else {
                node.next = list2;
                list2 = list2.next;
            }
            node = node.next;
        }
        if (list1) {
            node.next = list1;
        }
        else  {
            node.next = list2;
        }
        return n.next;
    }
}