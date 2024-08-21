/* 
    Find a peak element which is not smaller than its neighbours.

    Input: array[] = {10, 20, 15, 2, 23, 90, 67}
    Output: 20 or 90

 */

let array = [10, 20, 15, 2, 23, 90, 67]
let array1 = [5, 10, 20, 15]

function peakElement (arr, n) {

    let output = [];

    if (n == 1) return 0;
    if (arr[0] >= arr[1]) return 0;
    if (arr[n - 1] >= arr[n - 2]) return n - 1;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
            output.push(arr[i]);
        }
        if (arr[i] == arr.length && arr[i] > arr[i - 1]) {
            output.push(arr[i]);
        }
    }
    return output;
}



let output = peakElement(array, array.length);
let output1 = peakElement(array1, array1.length);

console.log(output);
console.log(output1);