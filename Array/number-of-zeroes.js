/*
Find the number of zeroes

Input: arr[] = {1, 1, 1, 1, 0, 0}
Output: 2

Input: arr[] = {0, 0, 0}
Output: 3
 */

let arr = [1, 1, 1, 1, 0, 0]



function numberOfZeroes (arr, low, high) {
    if (high >= low) {
        let mid = low + parseInt((high - low) / 2);
        if ((mid == 0 || arr[mid - 1] == 1) && arr[mid] == 0) {
            return mid;
        }
        if (arr[mid] == 0) {
            return numberOfZeroes(arr, low, mid - 1)
        } else {
            return numberOfZeroes(arr, mid + 1, high)
        }
    }
}

function array (arr, n) {
    let num = numberOfZeroes(arr, 0, n - 1)
    if (num == -1) {
        return 0;
    }
    return (n - num);
}


let output = array(arr, arr.length)

console.log(output)