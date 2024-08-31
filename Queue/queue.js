class Queue {
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

    enqueue (item) {
        if (this.#capacity === null || this.size < this.#capacity) {
            this.#list.push(item)
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
            return this.#list[0];
        }
    }

    print () {
        return Array.from(this.#list.values());
    }
}

class Printer extends Queue {

    #printing = false;
    constructor () {
        super(10);

        this.id = Math.floor(Math.random() * 10000);
    }


    #printDoc = () => {
        this.#printing = true;
        setTimeout(() => {
            const docCall = this.dequeue();
            docCall();
            if (this.isEmpty) {
                this.#printing = false;
            } else {
                this.#printDoc();
            }
        }, Math.floor(Math.random() * 2000))
    }

    print (doc) {
        return new Promise((resolve, reject) => {
            if (this.isFull) {
                reject('Printer is full')
            } else {
                this.enqueue(() => { resolve(doc) });

                if (!this.#printing) {
                    this.#printDoc()
                }
            }
        })
    }
}


class PrintNetwork extends Queue {
    #printers = [
        new Printer(),
        new Printer(),
        new Printer()
    ]

    print (doc) {
        return new Promise((res) => {
            const freePrinter = this.#printers.reduce((prevPrinter, printer) => {
                if (printer.size < prevPrinter.size) {
                    prevPrinter = printer
                }
                return prevPrinter
            }, this.#printers[0])

            if (freePrinter.isFull) {
                this.enqueue(() => { this.print(doc).then((id) => res(id)) })
            } else {
                freePrinter.print(doc).then(() => {
                    res(freePrinter.id);
                    if (this.size) {
                        const nextDoc = this.dequeue();
                        nextDoc();
                    }
                })
            }
        })
    }
}

const pn = new PrintNetwork();

Array.from({ length: 10 }, (_, i) => { i + 1 })
    .forEach(n => {
        pn.print(n)
            .then(id => console.log(n, 'printed by', id))
    })