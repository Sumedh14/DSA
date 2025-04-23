class Graph {
    constructor() {
        this.adjacenctList = {};
    }

    addVertex(value) {
        if (!this.adjacenctList.has(value)) {
            this.adjacenctList[value] = [];
        }
    }

    addEdges(source, destination) {
        if (!this.adjacenctList[source]) {
            this.addVertex(source);
        }
        if (!this.adjacenctList[destination]) {
            this.addVertex(destination);
        }

        if (this.adjacenctList[source] && this.adjacenctList[destination]) {
            this.adjacenctList[source].push(destination);
            this.adjacenctList[destination].push(source);
        }
    }

    removeEdges(source, destination) {
        this.adjacenctList[source] = this.adjacenctList[source].filter((val) => { val !== destination })
        this.adjacenctList[destination] = this.adjacenctList[destination].filter((val) => { val !== source })
    }

    removeVertex(value) {
        if (this.adjacenctList[value]) {
            this.adjacenctList[value].forEach(destination => {
                this.removeEdges(value, destination);
            });
        }
        delete this.adjacenctList[value];
    }


    breathFirstSerach(value) {
        const visited = {};
        const queue = [value];
        const result = [];

        while (queue.length > 0) {
            let current = queue.shift();
            if (this.adjacenctList[current]) {
                result.push(current);
                this.adjacenctList[current].forEach((val) => {
                    if (!visited.has(val)) {
                        visited[val] = true;
                        queue, push(val);
                    }
                })
            }
            return result;
        }
    }

    depthFirstSearch(value) {
        const visited = {};
        const stack = [value];
        const result = [];
        visited[value] = true;

        while (stack.length > 0) {
            let current = stack.pop();
            if (this.adjacenctList[current]) {
                result.push(current);
                this.adjacenctList[current].forEach((val) => {
                    if (!visited[val]) {
                        visited[val] = true;
                        stack.push(val);
                    }
                })
            }
        }
        return result;
    }
}