/*
You are given an array of distinct integers nums, sorted in ascending order, and an integer target.

Implement a function to search for target within nums. If it exists, then return its index, otherwise, return -1.

Input: nums = [-1,0,2,4,6,8], target = 4
Output: 3
 */


function search (nums, target) {
    let l = 0;
    let r = nums.length - 1;

    while (l <= r) {
        const m = l + Math.floor((r - l) / 2);
        if (nums[m] > target) {
            r = m - 1;
        } else if (nums[m] < target) {
            l = m + 1;
        } else {
            return m;
        }
    }
    return -1;
}

const search = (m, n, arr, target) => {
    let mid = Math.floor((m + n) / 2)
    if (arr[mid] == target) return mid;
    if (arr[mid] < target) {
        search(mid + 1, n, arr, target);
    }
    else {
        search(m, mid - 1, arr, target);
    }
    return -1;
}

const binarySearch = (arr, target) => {
    let m = 0, n = arr.length;
    let value = search(m, n, arr, target);
    return value
}

let value = binarySearch([-1, 0, 2, 4, 6, 8], 4)

console.log(value)