class Graph {
    constructor() {
        this.adjacenctList = new Map();
    }

    addVertex(value) {
        if (!this.adjacenctList.has(value)) {
            this.adjacenctList.set(value,[]) ;
        }
    }

    addEdges(source, destination) {
        if (!this.adjacenctList.has(source)) {
            this.addVertex(source);
        }
        if (!this.adjacenctList.has(destination)) {
            this.addVertex(destination);
        }

        if (this.adjacenctList.has(source) && this.adjacenctList.has(destination)) {
            this.adjacenctList.get(source).push(destination);
            this.adjacenctList.get(destination).push(source);
        }
    }

    removeEdges(source, destination) {
        this.adjacenctList.get(source).filter((val) => { val !== destination })
        this.adjacenctList.get(destination).filter((val) => { val !== source })
    }

    removeVertex(value) {
        if (this.adjacenctList.has(value)) {
            this.adjacenctList.get(value).forEach(destination => {
                this.removeEdges(value, destination);
            });
        }
        this.adjacenctList.delete(value);
    }


    breathFirstSerach(value) {
        const visited = new Set();
        const queue = [value];
        const result = [];
        visited.add(value);

        while (queue.length > 0) {
            let current = queue.shift();
            if (this.adjacenctList.has(current)) {
                result.push(current);
                this.adjacenctList.get(current).forEach((val) => {
                    if (!visited.has(val)) {
                        visited.add(val);
                        queue.push(val);
                    }
                })
            }
        }
        return result;
    }

    depthFirstSearch(value) {
        const visited = new Set();
        const stack = [value];
        const result = [];
        visited.add(value);

        while (stack.length > 0) {
            let current = stack.pop();
            if (this.adjacenctList.has(current)) {
                result.push(current);
                this.adjacenctList.get(current).forEach((val) => {
                    if (!visited.has(val)) {
                        visited.add(val);
                        stack.push(val);
                    }
                })
            }
        }
        return result;
    }
}

let graph = new Graph();

graph.addEdges(0, 1);
graph.addEdges(0, 2);
graph.addEdges(1, 2);
graph.addEdges(2, 3);

console.log("dfs",graph.depthFirstSearch(0));
console.log("bfs",graph.breathFirstSerach(0));