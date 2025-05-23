// Subset 

function subsetsR(nums) {
    let result = [];
    let size = nums.length;
    let sets = [];

    if (size === 0) {
        result.push([]);
    }
    else {
        const sub = (nums, result, count, sets) => {
            if (count >= nums.length) {
                result.push([...sets]);
                return;
            }
            sets.push(nums[count]);
            sub(nums, result, count + 1, sets);
            sets.pop();
            sub(nums, result, count + 1, sets);
        }
        sub(nums, result, 0, sets);
    }
    return result;
}

function subsetsI(nums) {
    let result = [[]];
    for (let num of nums) {
        let size = result.length;
        for (let i = 0; i < size; i++) {
            let sub = result[i].slice();
            sub.push(num);
            result.push(sub);
        }
    }
    return result;
}


// subsets 2

function subsetsWithDup(nums) {
    let result = [];
    let subset = [];
    nums.sort((a, b) => a - b);

    const subsetsWithDups = (nums, result, subset, count) => {
        if (count >= nums.length) {
            result.push([...subset]);
        }
        else {
            subset.push(nums[count]);
            subsetsWithDups(nums, result, subset, count + 1);
            subset.pop();
            while (nums[count] === nums[count + 1]) {
                count++;
            }
            subsetsWithDups(nums, result, subset, count + 1);
        }
    }

    subsetsWithDups(nums, result, subset, 0)
    return result;
}

//combination sum 

function combinationSum(nums, target) {
    let result = [];
    let sub = [];
    const dfs = (nums, target, result, sub, count) => {
        if (target == 0) {
            result.push([...sub]);
        } else if (target < 0 || count >= nums.length) {
            return;
        } else {
            sub.push(nums[count]);
            dfs(nums, target - nums[count], result, sub, count);
            sub.pop();
            dfs(nums, target, result, sub, count + 1);
        }
    }

    dfs(nums, target, result, sub, 0)
    return result;
}

//combination sum 2

function combinationSumTow(nums, target) {
    let result = [];
    let subset = [];
    nums.sort((a, b) => a - b);
    const subs = (nums, target, result, subset, count) => {
        if (target == 0) {
            result.push([...subset]);
            return;
        } else if (target < 0 || count >= nums.length) {
            return;
        } else {
            subset.push(nums[count]);
            subs(nums, target - nums[count], result, subset, count + 1);
            subset.pop();
            while (nums[count] == nums[count + 1]) {
                count++;
            }
            subs(nums, target, result, subset, count + 1);
        }

    }

    subs(nums, target, result, subset, 0);
    return result;
}



function permute(nums) {
    const result = [];
    const subset = [];
    const arr = new Array(nums.length).fill(false);

    const permut = (nums, result, subset, arr) => {
        if (subset.length == nums.length) {
            result.push([...subset]);
            return;
        } else {
            for (let i = 0; i < nums.length; i++) {
                if (!arr[i]) {
                    subset.push(nums[i]);
                    arr[i] = true;
                    permut(nums, result, subset, arr);
                    subset.pop();
                    arr[i] = false;
                }
            }
        }

    }

    permut(nums, result, subset, arr)
    return result;
}

function permuteTwo(nums) {
    const result = [];
    const subset = [];

    const arr = new Array(nums.lenght).fill(false);
    nums.sort((a, b) => a - b);
    const permut = (nums, result, subset, arr) => {
        if (subset.length == nums.length) {
            result.push([...subset]);
            return;
        } else {
            for (let i = 0; i < nums.length; i++) {
                if (arr[i] || (i > 0 && nums[i] === nums[i - 1] && !arr[i- 1])) {
                    continue;
                }
                if (!arr[i]) {
                    subset.push(nums[i]);
                    arr[i] = true;
                    permut(nums, result, subset, arr);
                    subset.pop();
                    arr[i] = false;

                }
            }
        }
    }

    permut(nums, result, subset, arr);
    return result;
}


// Serach Word

function exist(board, word) {

    const ROW = board.length;
    const COL = board[0].length;
    const result = new Set();
    const dfs = (r, c, i) => {
        if (i === word.length) { return true; }
        if (r < 0 || c < 0 || r >= ROW || c >= COL || board[r][c] !== word[i] || result.has(`${r},${c}`)) {
            return false;
        }
        result.add(`${r},${c}`);
        const res = dfs(r + 1, c, i + 1) ||
            dfs(r - 1, c, i + 1) ||
            dfs(r, c + 1, i + 1) ||
            dfs(r, c - 1, i + 1);
        result.delete(`${r},${c}`);
        return res;
    }

    for (let r = 0; r < ROW; r++) {
        for (let c = 0; c < COL; c++) {
            if (dfs(r, c, 0)) return true;
        }
    }
    return false;
}


let nums = [1, 2, 3]

let numsP = [1, 1, 2];
let permuteR = permute(numsP);
let permuteT = permuteTwo(numsP);
let combination = combinationSum(nums, 4);
let valR = subsetsR(nums);
let valI = subsetsI(nums);
console.log(valR);
console.log(combination);
console.log("permuteR", permuteR);
console.log("permuteT", permuteT);