/*

Convert LinkedList to Array and Back
 */


const LinkedListToArray = (list) => {
    let arr = [];
    while (list) {
        arr.push(list.value);
        list = list.next;
    }
    return arr;
}

const value = LinkedListToArray(list);



const ArrayToLinkedList = (arr) => {
    let list = arr.reverse().reduce((acc, curr) => {
        if (acc === null) {
            acc = new LinkedList(curr);
        } else {
            acc = new LinkedList(curr, acc);
        }
    })
    return list;
}

const list = ArrayToLinkedList(value);


