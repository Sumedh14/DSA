/*
Find Target in Rotated Sorted Array
You are given an array of length n which was originally sorted in ascending order. It has now been rotated between 1 and n times. For example, the array nums = [1,2,3,4,5,6] might become:

[3,4,5,6,1,2] if it was rotated 4 times.
[1,2,3,4,5,6] if it was rotated 6 times.
Given the rotated sorted array nums and an integer target, return the index of target within nums, or -1 if it is not present.
You may assume all elements in the sorted rotated array nums are unique,

Input: nums = [3,4,5,6,1,2], target = 1
Output: 4
*/


const targetInRotatedSortedArray = (arr, target) => {
    let right = arr.length - 1;
    let left = 0;
    while (left <= right) {
        let mid = Math.floor((right + left) / 2);
        if (arr[mid] === target) return mid;
        if (arr[left] <= arr[mid]) {
            if (arr[left] > target || arr[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        else {
            if (arr[right] < target || target < arr[mid]) {
                right = mid - 1
            } else {
                left = mid + 1;
            }
        }
    }
    return -1;
}

const value = targetInRotatedSortedArray([3, 4, 5, 6, 1, 2], 1);

console.log(value);