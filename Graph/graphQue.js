
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
        for(const direction of directions){
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

console.log("booleanMatrix", booleanMatrix(image, entry))