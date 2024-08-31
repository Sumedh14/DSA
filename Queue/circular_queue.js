class CircularQueue {
    #list;
    #capacity;
    #tail = -1;
    #head = -1;
    #size = 0;

    constructor (capacity) {
        this.#capacity = Math.max(capacity, 0) || 10;
        this.#list = Array(this.#capacity).fill(null);
    }

    get size () {
        return this.#size;
    }

    isEmpty () {
        return this.#size === 0
    }

    isFull () {
        return this.size === this.#capacity;
    }

    enqueue (item) {
        if (this.isFull) {
            this.#tail = (this.#tail + 1) % this.#capacity; 
            this.#list[this.#tail] = item;
            this.#size += 1;
            if (this.#head === -1) {
                this.#head = this.#tail;
            }
        }
        return this.#size
    }

    dequeue () {
        let item = null;
        if (!this.isEmpty) {
            item = this.#list[this.#head];
            this.#list[this.#head] = null;
            this.#head = (this.#head + 1) % this.#capacity;
            this.#size -= 1;
        }
        if (!this.size) {
            this.#head = -1;
            this.#tail = -1;
        }
    }

    peek () {
        if (this.size) {
            return this.#list[this.#tail];
        }
    }

    print () {
        console.log(this.#list.filter(el => el !== null));
    }

}