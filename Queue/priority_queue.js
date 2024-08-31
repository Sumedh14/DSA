class PriorityQueue {
    #list = [];
    #capacity;

    constructor (capacity) {
        this.#capacity = Math.max(capacity, 0) || null;
    }

    get size () {
        return this.#list.length
    }

    get isEmpty () {
        return this.size === 0
    }

    get isFull () {
        return this.size === this.#capacity && this.#capacity !== null
    }

    enqueue (item, priority = 0) {
        priority = Math.max(priority, 0)
        const element = { item, priority };
        if (
            this.isEmpty ||
            element.priority >= this.#list[this.size - 1].priority
        ) {
            this.#list.push(element)
        } else {
            for (let index in this.#list) {
                if (element.priority < this.#list[index].priority) {
                    this.#list.splice(index, 0, element)
                    break;
                }
            }
        }
        return this.size;
    }

    dequeue () {
        if (!this.isEmpty) {
            return this.#list.shift();
        }
    }


    peek () {
        if (!this.isEmpty) {
            const element = this.#list[0];
            return element ? element.item : null;
        }
    }

    print () {
        // return Array.from(this.#list.values());
        console.log(this.#list.map(ele => ele.item))
    }
}