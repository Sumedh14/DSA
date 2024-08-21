class Stack {
    #list = new Map();
    #maxSize = null;

    constructor (maxSize) {
        this.#maxSize = Number(maxSize) || null;
    }

    get size () {
        return this.#list.size;
    }

    push (item) {
        if (!this.#maxSize || this.size < this.#maxSize) {
            this.#list.set(this.size, item)

        }
        return this.size
    }

    pop () {
        if (this.size) {
            const item = this.#list.get(this.size - 1);
            this.#list.delete(this.size - 1);
            return item
        } else {
            return 'stack is empty'
        }
    }

    peek () {
        if (this.size) {
            return this.#list.get(this.size - 1) || null;
        }
    }

    print () {
        console.log(Array.from(this.#list.values()));
    }

    clear () {
        this.#list = new Map();
    }
}
