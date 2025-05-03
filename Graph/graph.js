class Graph {
    constructor() {
        this.adjacenctList = new Map();
    }

    addVertex(value) {
        if (!this.adjacenctList.has(value)) {
            this.adjacenctList.set(value, []);
        }
    }

    addEdges(source, destination, directed) {
        if (!this.adjacenctList.has(source)) {
            this.addVertex(source);
        }
        if (!this.adjacenctList.has(destination)) {
            this.addVertex(destination);
        }
        this.adjacenctList.get(source).push(destination);

        if (!directed && this.adjacenctList.has(source) && this.adjacenctList.has(destination)) {
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

    // cycliy dfs undirected graph

    cyclicDfsUndirected(start) {

        /*
        {
            0 -> [1,2]
            1 -> [0,2]
            2 -> [0,1,3]
            3 -> [2]
        }
        */
        let visited = new Set();
        let stack = [];
        let result = false;
        stack.push([start, -1]);

        const dfs = (adjacenctList, stack, visited) => {
            visited.add(start);
            while (stack.length > 0) {
                let [curr, parent] = stack.pop();
                for (const adj of adjacenctList.get(curr)) {
                    if (adj == parent) { continue; }
                    if (!visited.has(adj)) {
                        stack.push([adj, curr]);
                        visited.add(adj);
                        result = false;
                    } else if (adj !== parent && visited.has(adj)) {
                        result = true;
                    }
                }
            }
            return result;
        }
        return dfs(this.adjacenctList, stack, visited);
    }


    cyclicDfsUndirectedTwo(graph = this.adjacenctList) {
        const visited = new Set();
        const nodeLength = graph.size;


        const dfs = (start) => {
            const stack = [];
            stack.push([start, -1]);
            while (stack.length > 0) {
                const [curr, parent] = stack.pop();
                if (visited.has(curr)) { continue; }
                visited.add(curr);

                for (const neigbhour of graph.get(curr)) {
                    if (!visited.has(neigbhour)) {
                        stack.push([neigbhour, curr]);
                    } else if (neigbhour !== parent) {
                        return true;
                    }
                }
            }
            return false;
        }

        for (let i = 0; i < nodeLength; i++) {
            if (!visited.has(i)) {
                if (dfs(i)) {
                    return true;
                }
            }
        }

        return false;
    }

    cyclicDfsUndirectedRecursive(graph = this.adjacenctList) {
        const visited = new Set();
        const nodeLength = graph.size;
        const dfs = (start, parent) => {
            visited.add(start);
            for (const neigbhour of graph.get(start)) {
                if (!visited.has(neigbhour)) {
                    if (dfs(neigbhour, start)) {
                        return true;
                    }
                } else if (neigbhour !== parent) {
                    return true;
                }
            }
            return false;
        }
        for (let i = 0; i < nodeLength; i++) {
            if (!visited.has(i)) {
                if (dfs(i, -1)) {
                    return true
                }
            }
        }
        return false;
    }

    cyclicBfsUndirected(graph = this.adjacenctList) {
        const visited = new Set();
        const nodeLength = graph.size;
        const bfs = (start) => {
            const queue = [];
            queue.push({ curr: start, parent: -1 });
            while (queue.length > 0) {
                const { curr, parent } = queue.shift();
                if (visited.has(curr)) { continue; }
                visited.add(curr);
                for (const neigbhour of graph.get(curr)) {
                    if (!visited.has(neigbhour)) {
                        queue.push({ curr: neigbhour, parent: curr });
                    } else if (neigbhour !== parent) {
                        return true;
                    }
                }
            }
            return false;
        }

        for (let i = 0; i < nodeLength; i++) {
            if (!visited.has(i)) {
                if (bfs(i)) {
                    return true;
                }
            }
        }
        return false;
    }


    cyclicDfsDirectedRecursive(graph = this.adjacenctList) {
        const visited = new Set();
        const inRecurssion = new Array(graph.size).fill(false);

        const dfs = (start, graph, visited, inRecurssion) => {
            visited.add(start);
            inRecurssion[start] = true;
            for (const neigbhour of graph.get(start)) {
                if (!visited.has(neigbhour)) {
                    if (dfs(neigbhour, graph, visited, inRecurssion)) {
                        return true;
                    }
                }
                if (inRecurssion[neigbhour]) {
                    return true;
                }
            }
            inRecurssion[start] = false;
            return false;
        }

        for (let i = 0; i < graph.size; i++) {
            if (!visited.has(i)) {
                if (dfs(i, graph, visited, inRecurssion)) {
                    return true;
                }
            }
        }
        return false;
    }
}





let graph = new Graph();

// graph.addEdges(0, 1);
// graph.addEdges(0, 2);
// graph.addEdges(1, 2);
// graph.addEdges(2, 3);
// graph.addEdges(0, 1);
// graph.addEdges(1, 2);
// graph.addEdges(2, 3); 
// graph.addEdges(3, 0); 
// graph.addEdges(0, 4);
// graph.addEdges(0, 2);
// graph.addEdges(1, 2);
// graph.addEdges(2, 3);
// graph.addEdges(3, 1);

// graph.addEdges(0, 1, false);
// graph.addEdges(1, 2, false);
// graph.addVertex(4);
// graph.addEdges(5, 3, false);
// graph.addEdges(5, 6, false);

graph.addEdges(0, 1, true);
graph.addEdges(1, 2, true);
graph.addEdges(2, 0, true);



// console.log("dfs", graph.depthFirstSearch(0));
// console.log("bfs", graph.breathFirstSerach(0));
// console.log("cyclicDfsUndirected", graph.cyclicDfsUndirected(0));
// console.log("cyclicDfsUndirected", graph.cyclicBfsUndirected());
// console.log("cyclicDfsUndirected", graph.cyclicDfsUndirectedTwo());
// console.log("cyclicDfsUndirected", graph.cyclicDfsUndirectedRecursive());
console.log("cyclicDfsDirected", graph.cyclicDfsDirectedRecursive());