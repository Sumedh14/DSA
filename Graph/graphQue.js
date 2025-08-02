
// Search Maze 
//Given a 2D array of black and white entries representing a maze with designated entrance and exit points, find a path from the entrance to the exit, if one exists.


const maze = [[0, 0, 1, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 1, 0], [1, 1, 0, 1, 1], [0, 0, 0, 0, 0]];
let source = [0, 4];
let destination = [4, 1];

function searchMaze(maze, source, destination) {
    maze[source[0]][source[1]] = 1
    const mazeV = (maze, source, destination) => {
        if (source[0] == destination[0] && source[1] == destination[1]) {
            return true;
        }
        let directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
        let current;
        for (const direction of directions) {
            current = [source[0] + direction[0], source[1] + direction[1]];
            if (current[0] >= 0 &&
                current[0] < maze.length &&
                current[1] >= 0 &&
                current[1] < maze[current[0]].length &&
                maze[current[0]][current[1]] === 0
            ) {
                maze[current[0]][current[1]] = 1;
                if (mazeV(maze, current, destination)) {
                    return true;
                }
            }
        }
        return false
    }
    return mazeV(maze, source, destination);
}


function searchMazeNew(maze, source, destination) {
    const stack = [];
    const visited = new Set();
    stack.push(source);
    visited.add(source.toString());

    while (stack.length > 0) {
        const [x, y] = stack.pop();
        if (x == destination[0] && y == destination[1]) { return true; }
        const directions = [0, 0].map((i) => [1, -1].map((j) => [[x + i, y + j], [x + j, y + i]])).flat(2);
        for (const [dx, dy] of directions) {
            if (dx >= 0 && dy >= 0 && dx < maze.length && dy < maze[dx].length && maze[dx][dy] == 0) {
                if (!visited.has([dx, dy].toString())) {
                    stack.push([dx, dy]);
                    visited.add([dx, dy].toString());
                }
            }
        }
    }
    return false;
}

console.log("searchMaze", searchMaze(maze, source, destination));


// Paint a Boolean Matrix
// Implement a routine that takes an n X m Boolean array A together with an entry (x, y) and flips the color of the region associated with (x, y)

const image = [[1, 1, 1], [1, 1, 0], [1, 0, 1]];

const entry = [1, 1];

function booleanMatrix(image, entry) {

    let directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    let color = image[entry[0]][entry[1]];

    let queue = [];
    image[entry[0]][entry[1]] = Number(!color);
    queue.push(entry);
    let nagbhour;
    while (queue.length > 0) {
        let current = queue.shift();
        for (const direction of directions) {
            nagbhour = [current[0] + direction[0], current[1] + direction[1]];
            if (nagbhour[0] >= 0 &&
                nagbhour[0] < image.length &&
                nagbhour[1] >= 0 &&
                nagbhour[1] < image[nagbhour[0]].length &&
                image[nagbhour[0]][nagbhour[1]] == color
            ) {
                image[nagbhour[0]][nagbhour[1]] = Number(!color);
                queue.push(nagbhour);
            }
        }
    }
    return image;
}

function booleanMatrixNew(image, entry) {
    const queue = [];
    const visited = new Set();
    queue.push(entry);
    visited.add(entry.toString());
    let color = image[entry[0]][entry[1]];
    image[entry[0]][entry[1]] = Number(!color);

    for (const [x, y] of queue) {

        const destination = [0, 0].map((i) => [1, -1].map((j) => [[x + i, y + j], [x + j, y + i]])).flat(2);
        for (const [dx, dy] of destination) {
            if (dy >= 0 && dx >= 0 && dx < image.length && dy < image[dx].length && image[dx][dy] == color) {
                if (!visited.has([dx, dy].toString())) {
                    image[dx][dy] = Number(!color);
                    queue.push([dx, dy]);
                }
            }
        }
    }
    return image;
}

console.log("booleanMatrix", booleanMatrix(image, entry));
console.log("booleanMatrix", booleanMatrixNew(image, entry));


/*
You have a combination lock. It has 4 wheels that go from 0 to 9. Your job is to find the minimum amount of wheel turns to get to a target combination. The starting point is always 0000. However, there are several combinations that you have to avoid: deadends. If you get into a dead-end, the wheels will not turn anymore. If the target combination is impossible to reach return -1, otherwise return the minimum number of wheel turns.

ex1:
Input: deadends = ["8888"], target = "0109"
Output: 2
Explanation: 0000 -> 0009 -> 0109

ex2:
Input: deadends = ["8887","8889","8878","8898","8788","8988","7888","9888"], target = "8888"
Output: -1
Explanation: We can’t reach without crossing a deadend.
*/



function combinationLock(start, deadends, target) {
    const visited = new Set();
    const notIncude = new Set();
    const stack = [];
    stack.push([start, 0]);
    visited.add(start);
    notIncude.add(deadends);

    for (const [current, moves] of stack) {
        if (notIncude.has(current)) { continue; }
        if (current == target) { return moves }
        const combination = Array.from(current).reduce((arr, str, i) => arr.concat(
            `${current.slice(0, i)}${(Number(str) + 1) % 10}${current.slice(i + 1)}`,
            `${current.slice(0, i)}${(Number(str) + 9) % 10}${current.slice(i + 1)}`,
        ), []);

        for (const comb of combination) {
            if (!visited.has(comb)) {
                visited.add(comb);
                stack.push([comb, moves + 1]);
            }
        }
    }
    return 0;
}

let inputC = "0000", deadends = ["8887", "8889", "8878", "8898", "8788", "8988", "7888", "9888"], target = "1090";

console.log("combinationLock", combinationLock(inputC, deadends, target));



// Chess Knight Problem 

/*
Given an infinite chessboard, find out how many moves does the knight needs to reach a given square on the board.

boardSize = 8;
start = [1,1];
ends = [6,3]
*/


function infiniteChessboard(boardSize, start, ends) {
    const queue = [];
    const visited = new Set();
    queue.push([start, 0]);
    visited.add(start.toString());

    for (const [[x, y], moves] of queue) {
        if (x == ends[0] && y == ends[1]) { return moves; }
        const directions = [1, -1].map((i) => [2, -2].map((j) => [[x + i, y + j], [x + j, y + i]])).flat(2);

        for (const [dx, dy] of directions) {
            if (!visited.has([dx, dy].toString())) {
                visited.add([dx, dy].toString());
                queue.push([[dx, dy], moves + 1]);
            }
        }
    }
    return 0;
}

let boardSize = 8, start = [1, 1], ends = [6, 3];
console.log("infiniteChessboard", infiniteChessboard(boardSize, start, ends));



// Number of Provinces

/*
There are n cities. Some of them are connected, while some are not. If city a is connected directly with city b, and city b is connected directly with city c, then city a is connected indirectly with city c.
A province is a group of directly or indirectly connected cities and no other cities outside of the group.
You are given an n x n matrix isConnected where isConnected[i][j] = 1 if the ith city and the jth city are directly connected, and isConnected[i][j] = 0 otherwise.

Input: isConnected = [[1,1,0],[1,1,0],[0,0,1]]
Output: 2

Input: isConnected = [[1,0,0],[0,1,0],[0,0,1]]
Output: 3

Input:[[1, 1],[1, 1]]
Output: 1

function convert(input){
const adjList = new Map();

    for(let i = 0;i<input.lenght;i++){
        for(let j = 0 ;j<input[0].lenght;j++){
            if(input[i][j] !=0){
                if(!adjList.has(i)){
                    adjList.set(i,[]);
                }
                adjList.get(i).push(j);
            }
        }
    }
  return adjList;
}
 */


function numberOfProvincesDFS(input) {
    const adjList = new Map();
    const visited = new Set();
    const stack = [];
    let count = 0;

    for (let i = 0; i < input.length; i++) {
        adjList.set(i, []);
        for (let j = 0; j < input.length; j++) {
            if (input[i][j] === 1) {
                adjList.get(i).push(j);
            }
        }
    }


    const dfs = (start, graph, visited, stack) => {
        stack.push(start);

        while (stack.length > 0) {
            let curr = stack.pop();
            visited.add(curr);
            for (const neigbhour of graph.get(curr)) {
                if (!visited.has(neigbhour)) {
                    stack.push(neigbhour);
                }
            }
        }
        return true;
    }

    for (let i = 0; i < adjList.size; i++) {
        if (!visited.has(i)) {
            if (dfs(i, adjList, visited, stack)) {
                count++;
            }
        }
    }

    return count;
}

function numberOfProvincesTwoDFS(input) {
    const visited = new Set();
    const stack = [];
    let count = 0;


    const dfs = (start, input, visited, stack) => {
        stack.push(start);

        while (stack.length > 0) {
            let curr = stack.pop();
            for (let col = 0; col < input.length; col++) {
                if (!visited.has(col) && input[start][col] == 1) {
                    visited.add(curr);
                    stack.push(col);
                }
            }
        }
        return true;
    }

    for (let i = 0; i < input.length; i++) {
        if (!visited.has(i)) {
            if (dfs(i, input, visited, stack)) {
                count++;
            }
        }
    }
    return count;
}

const input = [[1, 1], [1, 1]]

console.log("numberOfProvinces", numberOfProvincesTwoDFS(input));



// Course Schedule 

/*
imput : 2; prerequisites = [(1,0),(0,1)]
output: false;
*/

// Kahn's Algorithm

function courseSchedule(input, prerequisites) {
    const adjList = new Map();
    const queue = [];
    const indegree = {};
    const expIndegree = {};
    let count = 0;
    for (let i = 0; i < input; i++) {
        adjList.set(i, []);
        for (let j = 0; j < prerequisites[0].length; j++) {
            if (prerequisites[i][j] == 1) {
                adjList.get(i).push(j);
            }
        }
    }

    for (let i = 0; i < adjList.size; i++) {
        indegree[i] = 0
    }

    for (let i = 0; i < prerequisites.length; i++) {
        expIndegree[i] = [];
        let sum = 0;
        for (let j = 0; j < prerequisites[0].length; j++) {
            if (prerequisites[i][j] == 1) {
                sum += 1;
                expIndegree[i][0] = sum;
            }
        }
    }

    for (const [vertex, neigbhour] of adjList) {
        for (const neig of neigbhour) {
            indegree[neig]++;
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
        for (const neig of adjList.get(curr)) {
            indegree[neig]--;
            if (indegree[neig] == 0) {
                queue.push(neig);
                count++;
            }
        }
    }

    if (count == Object.keys(indegree).length) {
        return true;
    } else {
        return false;
    }

}

let imput = 2, prerequisites = [[1, 0], [0, 1]];

console.log("courseSchedule", courseSchedule(imput, prerequisites))


// Coures Schedule Two

/*
    Input = 4 prerequisites = [[1,0],[2,0],[3,1],[3,2]]
    output = {0 , 2, 1, 3} if cycle is not there, if cyclic output = {}
*/



function courseScheduleTwo(inputTwo, prerequisitesTwo) {
    const indegree = {};
    const queue = [];
    const result = [];
    let count = 0;
    const adjList = new Map();

    for (let i = 0; i < inputTwo; i++) {
        adjList.set(i, []);
    }
    for (const [fir, sec] of prerequisitesTwo) {
        adjList.get(sec).push(fir)
    }

    for (let i = 0; i < adjList.size; i++) {
        indegree[i] = 0;
    }
    for (const [vertex, neigbhours] of adjList) {
        for (const neigbhour of neigbhours) {
            indegree[neigbhour]++;
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
        result.push(curr);
        for (const neigbhour of adjList.get(curr)) {
            indegree[neigbhour]--;
            if (indegree[neigbhour] == 0) {
                queue.push(neigbhour);
                count++;
            }
        }
    }

    if (count == Object.keys(indegree).length && result.length == Object.keys(indegree).length) {
        return result;
    }
    else {
        return {}
    }

}


let inputTwo = 6, prerequisitesTwo = [[1, 0], [2, 0], [3, 1], [3, 2], [4, 3], [5, 4], [3, 5]];

console.log("courseSchedule", courseScheduleTwo(inputTwo, prerequisitesTwo))


// cycle dectection using dsu

function cycleDectionUsingDSU(inputGraph) {
    const parent = new Array(inputGraph.size)
    const rank = new Array(inputGraph.size);

    for (let i = 0; i < inputGraph.size; i++) {
        parent[i] = i;
        rank[i] = 1;
    }

    const find = (val) => {
        if (val == parent[val]) {
            return val;
        }
        return parent[val] = find(parent[val]);
    }


    const union = (i_parent, neigbhour_parent) => {
        let i_parent_find = find(i_parent);
        let neigbhour_parent_find = find(neigbhour_parent);

        if (i_parent_find == neigbhour_parent) {
            return;
        }
        else if (rank[i_parent_find] > rank[neigbhour_parent_find]) {
            parent[neigbhour_parent_find] = i_parent_find;
        } else {
            parent[i_parent_find] = neigbhour_parent_find;
            rank[neigbhour_parent_find]++;
        }
    }

    for (let i = 0; i < inputGraph.size; i++) {
        for (const neigbhour of inputGraph.get(i)) {
            if (i < neigbhour) {
                let i_parent = find(i);
                let neigbhour_parent = find(neigbhour);
                if (i_parent == neigbhour_parent) {
                    return true;
                }
                union(i_parent, neigbhour_parent);
            }
        }
    }
    return false;
}

function satisfiabilityOfEquations(graph) {
    const parent = new Array(26);
    const rank = new Array(26).fill(0);

    for (let i = 0; i < 26; i++) {
        parent[i] = i;
    }

    const find = (val) => {
        if (val == parent[val]) {
            return;
        }
        return parent[val] = find(parent[val]);
    }

    const union = (x, y) => {
        let x_parent = find(x);
        let y_parent = find(y);

        if (x_parent == y_parent) {
            return;
        } else if (rank[x_parent] > rank[y_parent]) {
            parent[y_parent] = x_parent;
        } else {
            parent[x_parent] = y_parent;
            rank[y_parent]++;
        }
    }

    for (const val of graph) {
        if (val[1] == '=') {
            union(val[0] - 'a', val[3] - 'a')
        }
    }

    for (const val of graph) {
        if (val[1] == '!') {
            let char1 = val[0];
            let char2 = val[3];

            let first = find(char1 - 'a');
            let sec = find(char2 - 'a');

            if (first == sec) {
                return false;
            }
        }
    }
    return true;
}


// Number of operation to make network connected
function numberOFOperations(nodes, connections) {
    const parent = new Array(nodes);
    const rank = new Array(nodes).fill(0);

    for (let i = 0; i < nodes; i++) {
        parent[i] = i;
    }

    const find = (val) => {
        if (val == parent[val]) {
            return;
        }
        return parent[val] = find(parent[val]);
    }

    const union = (x, y) => {
        let x_parent = find(x);
        let y_parent = find(y);

        if (x_parent == y_parent) {
            return;
        }
        else if (rank[x_parent] > rank[y_parent]) {
            parent[y_parent] = x_parent;
        } else {
            parent[x_parent] = y_parent;
            rank[y_parent]++;
        }
    }
    let n = nodes;
    if (connections.size < nodes - 1) return false;
    for (const neigbhour of connections) {
        let first = neigbhour[0];
        let sec = neigbhour[1];
        let first_parent = find(first);
        let sec_parent = find(sec);
        if (first_parent !== sec_parent) {
            n--;
            union(first_parent, sec_parent);
        }
    }
    return n - 1;
}

// Network Delay Time - Dijstras Algorithm
function networkDelayTime(times, n, k) {
    const graph = new Map();
    for (const [u, v, w] of times) {
        if (!graph.has(u)) {
            graph.set(u, []);
        }
        graph.get(u).push({ node: v, time: w });
    }

    const distances = new Array(n + 1).fill(Infinity);
    distances[k] = 0;
    const priorityQueue = [];
    priorityQueue.push({ node: k, time: 0 });

    while (priorityQueue.length) {
        const { node, time } = priorityQueue.shift();
        if (time > distances[node]) continue;
        if (graph.has(node)) {
            for (const { node: neighbor, time: weight } of graph.get(node)) {
                const newTime = time + weight;
                if (newTime < distances[neighbor]) {
                    distances[neighbor] = newTime;
                    priorityQueue.push({ node: neighbor, time: newTime });
                    priorityQueue.sort((a, b) => a.time - b.time);
                }
            }
        }
    }
    const maxTime = Math.max(...distances.slice(1));
    return maxTime === Infinity ? -1 : maxTime;
}

// let times = [[2, 1, 1], [2, 3, 1], [3, 4, 1]], n = 4, k = 2;
let times = [[1, 2, 1]], n = 2, k = 2

const delayTime = networkDelayTime(times, n, k);
console.log("networkDelayTime", delayTime);



// Shortest path in Binary Matrix
function shortestPathBinaryMatrixBFS(grid) {
    const directions = [[0, 1], [1, 0], [0, -1], [-1, 0], [1, 1], [-1, -1], [1, -1], [-1, 1]];
    const queue = [];
    const visited = new Set();
    if (grid[0][0] === 1 || grid[grid.length - 1][grid[0].length - 1] === 1) return -1;

    queue.push([0, 0, 1]);
    visited.add("0,0");

    while (queue.length > 0) {
        const [x, y, dist] = queue.shift();
        if (x === grid.length - 1 && y === grid[0].length - 1) return dist;

        for (const [dx, dy] of directions) {
            const nx = x + dx;
            const ny = y + dy;
            if (nx >= 0 && nx < grid.length && ny >= 0 && ny < grid[0].length && grid[nx][ny] === 0 && !visited.has(`${nx},${ny}`)) {
                visited.add(`${nx},${ny}`);
                queue.push([nx, ny, dist + 1]);
            }
        }
    }
    return -1;
}

const grid = [
    [0, 1, 0],
    [1, 0, 1],
    [1, 0, 0]
]

console.log("shortestPathBinaryMatrixBFS", shortestPathBinaryMatrixBFS(grid));


// Shortest Path in a grid using Dijkstra's Algorithm
function shortestPathInGridDijstraAlgo(grid) {
    const result = new Array(grid.length).fill(Infinity).map(() => new Array(grid[0].length).fill(Infinity));
    const directions = [[0, 1], [1, 0], [0, -1], [-1, 0], [1, 1], [-1, -1], [-1, 1], [1, -1]];
    const priorityQueue = [];
    const visited = new Set();
    priorityQueue.push({ x: 0, y: 0, dist: 1 });
    result[0][0] = 1;
    visited.add("0,0");

    while (priorityQueue.length > 0) {
        const { x, y, dist } = priorityQueue.shift();
        if (x === grid.length - 1 && y === grid[0].length - 1) {
            return dist;
        }

        for (const [dx, dy] of directions) {
            const nx = x + dx;
            const ny = y + dy;
            if (nx >= 0 && nx < grid.length && ny >= 0 && ny < grid[0].length && grid[nx][ny] === 0 && !visited.has(`${nx},${ny}`)) {
                const newDist = dist + 1;
                if (newDist < result[nx][ny]) {
                    result[nx][ny] = newDist;
                    priorityQueue.push({ x: nx, y: ny, dist: newDist });
                    visited.add(`${nx},${ny}`);
                    priorityQueue.sort((a, b) => a.dist - b.dist);
                }
            }
        }
    }
    return -1; // If no path found
}

const gridDij = [
    [0, 0, 0],
    [1, 1, 0],
    [1, 0, 0]
]

console.log("shortestPathInGridDijstraAlgo", shortestPathInGridDijstraAlgo(gridDij));


// Path with minimum effort
function minimumEffortPath(heights) {
    const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    const priorityQueue = [];
    const effortGrid = new Array(heights.length).fill(Infinity).map(() => new Array(heights[0].length).fill(Infinity));
    priorityQueue.push({ x: 0, y: 0, effort: 0 });

    while (priorityQueue.length > 0) {
        const { x, y, effort } = priorityQueue.shift();
        if (x === heights.length - 1 && y === heights[0].length - 1) {
            return effort;
        }

        for (const [dx, dy] of directions) {
            const nx = x + dx;
            const ny = y + dy;

            if (nx >= 0 && nx < heights.length && ny >= 0 && ny < heights[0].length && heights[nx][ny] !== undefined) {
                const newEffort = Math.max(effort, Math.abs(heights[nx][ny] - heights[x][y]));
                if (newEffort < effortGrid[nx][ny]) {
                    effortGrid[nx][ny] = newEffort;
                    priorityQueue.push({ x: nx, y: ny, effort: newEffort });
                    priorityQueue.sort((a, b) => a.effort - b.effort);
                }

            }
        }
    }
}

const heights = [[1, 2, 2], [3, 8, 2], [5, 3, 5]];
const heightsTwo = [
    [1, 2, 1, 1, 1],
    [1, 2, 1, 2, 1],
    [1, 2, 1, 2, 1],
    [1, 2, 1, 2, 1],
    [1, 1, 1, 2, 1]
];

console.log("minimumEffortPath", minimumEffortPath(heights));
// console.log("minimumEffortPathTwo", minimumEffortPath(heightsTwo));

// Simulate routers and LSAs
class Router {
    constructor(id) {
        this.id = id;
        this.links = {}; // neighborId: cost
        this.lsaDatabase = {}; // routerId: links
    }

    addLink(neighborId, cost) {
        this.links[neighborId] = cost;
    }

    generateLSA() {
        // Each router advertises its links
        return { routerId: this.id, links: { ...this.links } };
    }

    receiveLSA(lsa) {
        // Store received LSA in database
        this.lsaDatabase[lsa.routerId] = lsa.links;
    }

    buildNetworkMap() {
        // Combine all LSAs to build the network graph
        const graph = {};
        for (const [routerId, links] of Object.entries(this.lsaDatabase)) {
            graph[routerId] = links;
        }
        return graph;
    }
}

// Example usage:
const r1 = new Router('A');
const r2 = new Router('B');
const r3 = new Router('C');

r1.addLink('B', 10);
r1.addLink('C', 5);
r2.addLink('A', 10);
r2.addLink('C', 2);
r3.addLink('A', 5);
r3.addLink('B', 2);

// Routers generate LSAs
const lsa1 = r1.generateLSA();
const lsa2 = r2.generateLSA();
const lsa3 = r3.generateLSA();

// Routers receive LSAs from others
[r1, r2, r3].forEach(router => {
    router.receiveLSA(lsa1);
    router.receiveLSA(lsa2);
    router.receiveLSA(lsa3);
});

// Each router builds the network map
console.log(r1.buildNetworkMap());
console.log(r2.buildNetworkMap());
console.log(r3.buildNetworkMap());