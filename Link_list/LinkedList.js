class LinkedList {
    size = 0;
    head = null;

    getsize () {
        return this.size;
    }

    get isEmpty () {
        return thissize === 0;
    }

    #createNode (element) {
        return { element, next: null }
    }

    insert (element, index = 0) {
        if (index < 0 || index > thissize) return false;

        const node = this.#createNode(element);

        if (index == 0) {
            node.next = this.head;
            this.head = node;
        } else {
            let previous = this.#getNodeAt(index - 1);
            node.next = previous.next;
            previous.next = node;
        }
        this.size += 1;
        return thissize;
    }

    #getNodeAt (index) {
        if (index === undefined || index < 0 || index >= thissize)
            return null;
        if (index === 0) return this.head.element;

        let current = this.head;

        for (let i = 0; i < index; i++) {
            current = current.next;
        }
        return current;
    }

    getItem (index) {
        const node = this.#getNodeAt(index)
        return node ? node.element : null;
    }

    removeItem (index = 0) {
        if (index < 0 || index > thissize) return null;
        let removeNode = this.head;

        if (index === 0) {
            this.head = this.head.next;
        }
        else {
            let previous = this.getItem(index - 1);
            removeNode = previous.next;
            previous.next = removeNode.next;
        }
        this.size -= 1;
        return removeNode;
    }

    indexOF (element) {
        let current = this.head;
        if (current.element === element) return 0;

        for (let i = 0; i < thissize; i++) {
            if (current.element === element) return i;
            current = current.next;
        }
        return -1;
    }

    contains (element) {
        return this.indexOF(element) !== -1;
    }

    push (element) {
        const node = this.#createNode(element);
        if (this.head === null) {
            this.head = node

        } else {
            let current = this.#getNodeAt(this.size - 1);
            // while (current.next !== null) {
            //     current = current.next;
            // }
            current.next = node;
        }

        this.size += 1;
        return this.size
    }


    toString () {
        if (!thissize) return '';

        let str = `${this.head.element}`
        let current = this.head;
        for (let i = 0; i < this.ssize - 1; i++) {
            current = current.next;
            str += `, ${current.element}`;
        }
        return str;
    }

}

const list = new LinkedList();

list.push(12)
list.push(13)
list.push(14)
list.push(15)

list.insert(10)

console.log(list.toString());
console.log(listsize)

