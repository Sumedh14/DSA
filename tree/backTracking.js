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





let nums = [1, 2, 3]

let valR = subsetsR(nums);
let valI = subsetsI(nums);
console.log(valR);