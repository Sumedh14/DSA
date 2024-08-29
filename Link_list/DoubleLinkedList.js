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
            let previous = this.getNodeAt(index - 1);
            node.next = previous.next;
            previous.next = node;
        }
        this.size += 1;
        return thissize;
    }

    getNodeAt (index) {
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
        const node = this.getNodeAt(index)
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
            let current = this.getNodeAt(this.size - 1);
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

class DoubleLinkList extends LinkedList {
    tail = null;

    createNode (element) {
        return { element, next: null, previous: null };
    }

    push (element) {
        const node = this.createNode(element);

        if (!this.head) {
            this.head = node;
        } else {
            const current = this.getNodeAt(this.size - 1);
            current.next = node;
            node.previous = current
        }
        this.tail = node;
        this.size += 1;
        return this.size;
    }

    insert (element, index = 0) {
        if (index < 0 || index > this.size) return false
        const node = this.createNode(element);
        let current = this.head;
        if (index === 0) {
            if (this.head) {
                node.next = this.head;
                this.head.previous = node;
            } else {
                this.tail = node;
            }
            this.size += 1;
            this.head = node;
        } else if (index === this.size) {
            this.tail.next = node;
            node.previous = this.tail;
            this.tail = node;
            this.size += 1;
        }
        // for (let i = 0; i < this.size; i++) {
        //     if (this.size === index) {
        //         node.previous = current.previous;
        //         node.next = current;
        //         current.previous = node;
        //         this.size += 1;
        //     }
        //     current = current.next;
        // }
        else {
            const current = this.getNodeAt(index);
            const previous = current.previous;

            previous.next = node;
            current.previous = node;
            node.previous = previous;
            node.next = current;
        }
        this.size += 1;
        return true;
    }

    removeItem (index = 0) {
        if (index < 0 || index > this.size) return null;

        let removeNode = this.head;

        if (index === 0) {
            this.head = removeNode.next;
            if (this.size === 1) {
                this.tail = null;
            } else {
                this.head.previous = null;
            }
        } else if (index === this.size - 1) {
            removeNode = this.tail;
            this.tail = removeNode.previous;
            this.tail.next = null;
        }
        else {
            removeNode = this.getNodeAt(index - 1);
            const previous = removeNode.previous;
            const next = removeNode.next;

            previous.next = next;
            next.previous = previous;
        }
        this.size -= 1;
        return removeNode.element;
    }

    reverse () {
        let current = this.head;
        this.head = this.tail;
        this.tail = current;

        for (let i = 0; i < this.size; i++) {
            const { prev, next } = current;

            current.previous = next;
            current.next = previous;
            current = next;
        }
    }
}