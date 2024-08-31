/*
two Sum

Input: nums = [3,4,5,6], target = 7
Output: [0,1]


Input: nums = [5,5], target = 10
Output: [0,1]
*/

function twoSum (arr, target) {
    let hashMap = new Map();
    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        let sub = target - num;

        let subIndex = hashMap.get(sub);
        let isTarget = hashMap.has(sub);

        if (isTarget) return [i, subIndex];

        hashMap.set(num, i);
    }
}

function twoSum (nums, target) {
    let obj = {}
    for (let i = 0; i < nums.length; i++) {
        let n = nums[i]
        if (obj[target - n] >= 0) {
            return [obj[target - n],i]
        } else {
            obj[nums[i]] = i;
        }
    }
}

const nums = [3, 4, 5, 6], target = 8

const value = twoSum(nums, target);

console.log(value);

