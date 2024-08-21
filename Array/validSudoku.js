/*
    Valid Sudoko
*/

const validSudoku = (board) => {
    const boards = 3;
    const [boxes, cols, rows] = getBoards(boards);

    return searchGrid(board, boxes, cols, rows)
}

const initiBorder = (rows, cols) => {
    return new Array(rows).fill().map(() => new Array(cols).fill(false));
}

const getBoards = (boards) => {
    const [rows, cols] = [9, 9];
    return new Array(boards).fill().map(() => initiBorder(rows, cols))
}

const searchGrid = (board, boxes, rows, cols) => {
    const [_row, _col] = [9, 9];

    for (let row = 0; row < _row; row++) {
        for (let col = 0; col < _col; col++) {
            let char = board[row][col];
            let index = (Math.floor(row / 3) * 3) + (Math.floor(col / 3));

            let isEmpty = char === '.';

            if (isEmpty) continue;

            const hasMoved = boxes[index][(char - 1)] || cols[index][(char - 1)] || rows[index][(char - 1)]

            if (hasMoved) return false

            rows[row][(char - 1)] = true;
            cols[col][char - 1] = true;
            boxes[index][char - 1] = true;
        }
    }
    return true
} 


// function validSudoku (arr) {
//     let rows = new Map();
//     let cols = new Map();
//     let board = new Map();

//     for (let r = 0; r < 9; r++) {
//         for (let c = 0; c < 9; c++) {
//             const cell = arr[r][c];
//             if (cell == '.') continue;
//             if (rows.get(r)?.has(cell)
//                 || cols.get(c)?.has(cell)
//                 || board.get(Math.floor(r / 3) * 3 + Math.floor(c / 3))?.has(cell)) {
//                 return false;
//             }
//             cols.set(c, new Set(cols.get(c)).add(cell));
//             rows.set(r, new Set(rows.get(r)).add(cell));
//             board.set(Math.floor(r / 3) * 3 + Math.floor(c / 3), new Set(board.get(Math.floor(r / 3) * 3 + Math.floor(c / 3))).add(cell));
//         }
//     }
//     return true;
// }



// function validSudoku (arr) {
//     let hasSet = new Set();
//     for (let r = 0; r < 9; r++) {
//         for (let c = 0; c < 9; c++) {
//             let cell = arr[r][c];
//             if (cell != '.') {
//                 if (!hasSet.add(cell + "row" + r)
//                     || !hasSet.add(cell + "col" + c)
//                     || !hasSet.add(cell + Math.floor(r / 3) + "-" + Math.floor(c / 3))) {
//                     return false;
//                 }
//             }
//         }
//     }
//     return true;
// }

let board =
    [["1", "2", ".", ".", "3", ".", ".", ".", "."],
    ["4", ".", ".", "5", ".", ".", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", ".", "3"],
    ["5", ".", ".", ".", "6", ".", ".", ".", "4"],
    [".", ".", ".", "8", ".", "3", ".", ".", "5"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", ".", ".", ".", ".", ".", "2", ".", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "8"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"]]

let board1 =
    [["1", "2", ".", ".", "3", ".", ".", ".", "."],
    ["4", ".", ".", "5", ".", ".", ".", ".", "."],
    [".", "9", "1", ".", ".", ".", ".", ".", "3"],
    ["5", ".", ".", ".", "6", ".", ".", ".", "4"],
    [".", ".", ".", "8", ".", "3", ".", ".", "5"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", ".", ".", ".", ".", ".", "2", ".", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "8"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"]]

Output: false


const value = validSudoku(board1);

console.log(value);
