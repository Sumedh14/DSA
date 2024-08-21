/*
Find the Rotation Count in Rotated Sorted array

Input: arr[] = {15, 18, 2, 3, 6, 12}
Output: 2
Explanation: Initial array must be {2, 3, 6, 12, 15, 18}.
We get the given array after rotating the initial array twice.

*/


let arr = [15, 18, 2, 3, 6, 12]

function rotatedSortedArray (arr, n) {
    let min = arr[0]
    let min_index = 0;
    for (let i = 0; i < n; i++) {
        if (min > arr[i]) {
            min = arr[i];
            min_index = i;
        }
    }

}


let output = rotatedSortedArray(arr, arr.length);

console.log(output);


/*

function rotateArray(arr, n=arr.length){
    let min = arr[0];
    min_index = 0;
    for(let i = 0;i<n;i++){
        if(min>arr[i]){
            min = arr[i];
            min_index = i
        }
    }
}
 */


/*
function rotateLeft(arr,k){
    for(let i =0 ;i<k; i++){
        let min = arr.shift();
        arr.push(min);
    }
    return arr;
}

let arrL = [15, 18, 2, 3, 6, 12]
let outputL = rotateLeft(arrL, 3);

console.log(outputL);
*/

