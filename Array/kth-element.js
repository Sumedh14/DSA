/*
K-th Element of Two Sorted Arrays

Input : Array 1 - 2 3 6 7 9
        Array 2 - 1 4 8 10
        k = 5
Output : 6
Explanation: The final sorted array would be -
1, 2, 3, 4, 6, 7, 8, 9, 10
The 5th element of this array is 6.
*/

let arr1 = [2, 3, 6, 7, 9];
let arr2 = [1, 4, 8, 10];
let k = 5;

function sortedArray (arr1, arr2, m, n, d) {
    let sorted = Array(m + n).fill(0);
    let i = 0;
    let j = 0;
    let k = 0;

    while (i < m && j < n) {
        if (arr1[i] < arr2[j]) {
            sorted[k++] = arr1[i++];
        } else {
            sorted[k++] = arr2[j++];
        }
        while (i < m)
            sorted[k++] = arr1[i++];
        while (j < n)
            sorted[k++] = arr2[j++];
        console.log(d)
        let f = d - 1
        let l = sorted[f]
        return {
            l
            , sorted
        };
    }

}

console.log(arr1.length, arr2.length)

let output = sortedArray(arr1, arr2, arr1.length, arr2.length, k);

console.log(output)


// function kth (arr1, arr2, m, n, k) {
//     var sorted1 = Array(m + n).fill(0);
//     var i = 0, j = 0, d = 0;
//     while (i < m && j < n) {
//         if (arr1[i] < arr2[j])
//             sorted1[d++] = arr1[i++];
//         else
//             sorted1[d++] = arr2[j++];
//     }
//     while (i < m)
//         sorted1[d++] = arr1[i++];
//     while (j < n)
//         sorted1[d++] = arr2[j++];
//     return sorted1[k - 1];
// }

// // Driver Code

// var arr1 = [2, 3, 6, 7, 9];
// var arr2 = [1, 4, 8, 10];
// var k = 5;


// let output = kth(arr1, arr2, 5, 4, k)

// console.log(output)
