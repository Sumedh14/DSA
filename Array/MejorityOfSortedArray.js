/*
Check for Majority Element in a sorted array

Input: arr[] = {1, 2, 3, 3, 3, 3, 10}, x = 3
Output: True (x appears more than n/2 times in the given array)

Input: arr[] = {1, 1, 2, 4, 4, 4, 6, 6}, x = 4
Output: False (x doesn't appear more than n/2 times in the given array)
*/


let arr = [1, 2, 3, 3, 3, 3, 10]

function majorityElement (arr, n) {
    let result = 0;
    let count = 1;
    for (let i = 1; i < n; i++) {
        if (arr[result] === arr[i]) {
            count++;
        } else {
            count--;
        }
        if (count === 0) {
            result = i;
            count = 1;
        }
    }
    count = 0;
    for (let i = 0; i < n; i++) {
        if (arr[result] === arr[i]) {
            count++;
        }
    }
    if (count < n / 2) {
        return -1
    }
    return arr[result];
}
let output = majorityElement(arr, arr.length);

console.log(output);