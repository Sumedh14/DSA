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
            let sub = result[i].spice();
            sub.push(num);
            result.push(sub);
        }
    }
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


let nums = [1, 2, 3]


let combination = combinationSum(nums, 4);
let valR = subsetsR(nums);
let valI = subsetsI(nums);
console.log(valR);
console.log(combination);