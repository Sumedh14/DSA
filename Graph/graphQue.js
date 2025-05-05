
// Search Maze 
//Given a 2D array of black and white entries representing a maze with designated entrance and exit points, find a path from the entrance to the exit, if one exists.

const maze = [[0, 0, 1, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 1, 0], [1, 1, 0, 1, 1], [0, 0, 0, 0, 0]];
let source = [0, 4];
let destination = [3, 2];

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

console.log("booleanMatrix", booleanMatrix(image, entry));


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


function numberOfProvinces(input) {
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

function numberOfProvincesTwo(input) {
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

const input = [[1, 1],[1, 1]]

console.log("numberOfProvinces", numberOfProvincesTwo(input))