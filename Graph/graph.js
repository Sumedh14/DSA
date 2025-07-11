class Graph {
    constructor() {
        this.adjacenctList = new Map();
        this.item = [];
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

    getAdkList() {
        return this.adjacenctList;
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
                        stack.push([curr]);
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

    topologicalSortingDFS(graph = this.adjacenctList) {
        const visited = new Set();
        const stack = [];
        const result = [];

        const dfs = (graph, start, visited, stack) => {
            visited.add(start);
            for (const neigbhour of graph.get(start)) {
                if (!visited.has(neigbhour)) {
                    dfs(graph, neigbhour, visited, stack);
                }
            }
            stack.push(start);
        }

        for (let i = 0; i < graph.size; i++) {
            if (!visited.has(i)) {
                dfs(graph, i, visited, stack);
            }
        }

        while (stack.length > 0) {
            result.push(stack.pop());
        }
        return result;
    }


    // Kahn's Algorithm (DAG( Directed Asylic Graph))
    topologicalSortingBFS(graph = this.adjacenctList) {
        const indegree = {};
        const queue = [];
        const result = [];
        for (const [vertex, neigbhour] of graph) {
            indegree[vertex] = 0;
        }
        for (const [vertex, neigbhour] of graph) {
            for (const nei of neigbhour) {
                indegree[nei]++;
            }
        }

        for (let i = 0; i < Object.keys(indegree).length; i++) {
            if (indegree[i] == 0) {
                queue.push(i);
            }
        }

        while (queue.length > 0) {
            let res = queue.shift();
            result.push(res);
            for (const neigbhour of graph.get(res)) {
                indegree[neigbhour]--;
                if (indegree[neigbhour] == 0) {
                    queue.push(neigbhour);
                }
            }
        }
        return result;
    }

    cyclicBfsDirected(graph = this.adjacenctList) {
        const indegree = {};
        const queue = [];
        let count = 0;
        for (const [vertex, neigbhour] of graph) {
            indegree[vertex] = 0;
        }
        for (const [vertex, neigbhour] of graph) {
            for (const nei of neigbhour) {
                indegree[nei]++;
            }
        }


        for (let i = 0; i < Object.keys(indegree).length; i++) {
            if (indegree[i] == 0) {
                queue.push(i);
                count++;
            }
        }
        while (queue.length > 0) {
            let curr = queue.shift();
            for (const neigbhour of graph.get(curr)) {
                indegree[neigbhour]--;
                if (indegree[neigbhour] == 0) {
                    queue.push(neigbhour);
                    count++;
                }
            }
        }
        if (count == Object.keys(indegree).length) {
            return false;
        }
        else {
            return true;
        }
    }

    //odd number cycle -> not bipartite
    //even number cycle -> bipartite
    //open graph -> bipartite
    // grouping of graphs
    bipartiteDFS(graph = this.adjacenctList) {
        const visited = new Array(Object.keys(graph).length).fill(-1);
        const red = 1;
        const green = 0;

        const dfs = (curr, graph, visited, currColor) => {
            visited[curr] = currColor;
            for (const neigbhour of graph.get(curr)) {
                if (visited[neigbhour] == visited[curr]) {
                    return false;
                }
                if (visited[neigbhour] == -1) {
                    const colorNeigbhour = 1 - currColor;
                    if (dfs(neigbhour, graph, visited, colorNeigbhour == false)) {
                        return false;
                    }
                }
            }
            return true;
        }

        for (let i = 0; i < graph.size; i++) {
            if (visited[i] == -1) {
                if (dfs(i, graph, visited, red) == false) {
                    return false;
                }
            }
        }
        return true;
    }

    bipartiteBFS(graph = this.adjacenctList) {
        const visited = new Array(graph.size).fill(-1);
        const queue = [];
        const curr = 0;
        visited[curr] = 1;
        queue.push({ curr, visited });

        while (queue.length > 0) {
            const { curr, visited } = queue.shift();
            for (const neigbhour of graph.get(curr)) {
                if (visited[neigbhour] == visited[curr]) {
                    return false;
                }
                else if (visited[neigbhour] == -1) {
                    const currColor = 1 - visited[curr];
                    visited[neigbhour] = currColor;
                    queue.push({ neigbhour, visited });
                }
            }
        }
        return true;
    }

    disjointSetUnit() {
        const findParent = (value, parent) => {
            if (value !== parent[value]) {
                return value;
            }

            return findParent(parent[value], parent);
        };

        const union = (x, y, parent) => {
            let x_parent = findParent(x, parent);
            let y_parent = findParent(y, parent);

            if (x_parent !== y_parent) {
                parent[x_parent] = y_parent;
            }
        };
    }

    disjointSetUnitUsingRankandPath(graph = this.adjacenctList) {
        const visited = new Set();
        const result = [];
        const dfs = (start, graph, result) => {
            const stack = [];
            stack.push(start);
            result.push(start);
            visited.add(start);
            while (stack.length) {
                let curr = stack.pop();
                result.push(curr);
                for (const neigbhour of graph.get(start)) {
                    if (!visited.has(neigbhour)) {
                        visited.add(neigbhour);
                        stack.push(neigbhour);
                    }
                }
            }
        }

        for (let i = 0; i < graph.size; i++) {
            if (!visited.has(i)) {
                dfs(i, graph, result);
            }
        }
        const findParent = (val, parent) => {
            if (val !== parent[val]) {
                return val;
            }

            return parent[val] = findParent(parent[val], parent);
        }
        const union = (x, y, parent) => {
            const rank = new Array(parent.length).fill(0);
            let x_parent = findParent(x, parent);
            let y_parent = findParent(y, parent);
            if (x_parent == y_parent) {
                return;
            }
            if (rank[x_parent] > rank[y_parent]) {
                parent[y_parent] = x_parent;
            } else if (rank[x_parent] < rank[y_parent]) {
                parent[x_parent] = y_parent;
            } else {
                parent[x_parent] = y_parent;
                rank[y_parent] += 1;
            }
        }

        union(x, y, result);
    }

    // Dijstras's Alogorithm
    dijstrasAddEdges(u, v, w) {
        if (!this.adjacenctList.has(u)) {
            this.adjacenctList.set(u, {});
            this.adjacenctList.get(u)[v] = w;
        }
        if (!this.adjacenctList.has(v)) {
            this.adjacenctList.set(v, {});
            this.adjacenctList.get(v)[u] = w;
        }
        this.adjacenctList.forEach((value, key) => {
            if (key == u && !value[v]) {
                value[v] = w;
            }
            if (key == v && !value[u]) {
                value[u] = w;
            }
        })
    }
    enque(element, priority) {
        const queueElement = { element, priority };
        let add = false;
        for (let i = 0; i < this.item.length; i++) {
            if (queueElement.priority < this.item[i].priority) {
                this.item.splice(i, 0, queueElement);
                add = true;
                break;
            }
        }
        if (!add) {
            this.item.push(queueElement);
        }
    }

    dequeue() {
        return this.item.shift();
    }

    isEmptyQueue() {
        return this.item.length === 0;
    }

    dijstraShortestDistancePriorityQueue(start, graph = this.adjacenctList) {
        const distances = new Array(graph.size).fill(Infinity);
        distances[start] = 0;

        this.enque(start, 0);

        while (!this.isEmptyQueue()) {
            const { element, priority } = this.dequeue();

            if (graph.has(parseInt(element))) {
                for (const neigbhour in graph.get(parseInt(element))) {
                    const distance = graph.get(parseInt(element))[neigbhour];
                    const newDistance = distances[element] + distance;

                    if (newDistance < distances[neigbhour]) {
                        distances[neigbhour] = newDistance;
                        this.enque(neigbhour, newDistance);
                    }
                }
            }
        }
        return distances;
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

// graph.addEdges(0, 1, true);
// graph.addEdges(1, 2, true);
// graph.addEdges(2, 0, true);

// graph.addEdges(0, 2, true);
// graph.addEdges(0, 3, true);
// graph.addEdges(3, 2, true);
// graph.addEdges(2, 1, true);
// graph.addEdges(3, 1, true);
// graph.addEdges(1, 4, true);
// graph.addEdges(5, 1, true);
// graph.addEdges(5, 4, true);


// graph.addEdges(0, 1, true);
// graph.addEdges(1, 2, true);
// graph.addEdges(2, 3, true);
// graph.addEdges(3, 1, true);



// console.log("dfs", graph.depthFirstSearch(0));
// console.log("bfs", graph.breathFirstSerach(0));
// console.log("cyclicDfsUndirected", graph.cyclicDfsUndirected(0));
// console.log("cyclicDfsUndirected", graph.cyclicBfsUndirected());
// console.log("cyclicDfsUndirected", graph.cyclicDfsUndirectedTwo());
// console.log("cyclicDfsUndirected", graph.cyclicDfsUndirectedRecursive());
// console.log("cyclicDfsDirectedRecursive", graph.cyclicDfsDirectedRecursive());
// console.log("topologicalSortingDFS", graph.topologicalSortingDFS());
// console.log("topologicalSortingBFS", graph.topologicalSortingBFS());
// console.log("cyclicBfsDirected", graph.cyclicBfsDirected());

graph.dijstrasAddEdges(0, 1, 4)
graph.dijstrasAddEdges(0, 7, 8)
graph.dijstrasAddEdges(1, 2, 8)
graph.dijstrasAddEdges(1, 7, 11)
graph.dijstrasAddEdges(2, 3, 7)
graph.dijstrasAddEdges(2, 8, 2)
graph.dijstrasAddEdges(2, 5, 4)
graph.dijstrasAddEdges(3, 4, 9)
graph.dijstrasAddEdges(3, 5, 14)
graph.dijstrasAddEdges(4, 5, 10)
graph.dijstrasAddEdges(5, 6, 2)
graph.dijstrasAddEdges(6, 7, 1)
graph.dijstrasAddEdges(6, 8, 6)
graph.dijstrasAddEdges(7, 8, 7);

const g = graph.getAdkList();
console.log(g);

const distance = graph.dijstraShortestDistancePriorityQueue(0);
console.log("distance", distance)
