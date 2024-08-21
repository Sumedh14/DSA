/*
Median of two Sorted Arrays of Different Sizes

Input: a[] = {-5, 3, 6, 12, 15}, b[] = {-12, -10, -6, -3, 4, 10}
Output: The median is 3.
Explanation: The merged array is: ar3[] = {-12, -10, -6, -5 , -3, 3, 4, 6, 10, 12, 15}.
So the median of the merged array is 3
 */

let a = [-5, 3, 6, 12, 15]
let b = [-12, -10, -6, -3, 4, 10]


function median (arr, l) {
    if (l % 2 == 0) {

        let a = l / 2;
        let b = arr[a];
        let c = arr[a - 1];
        let d = (b + c) / 2;
        return d;
    }
    else {
        let z = Math.floor(l / 2);
        return arr[z];
    }
}

function medianArray (arr1, arr2, m, n) {
    let arr3 = arr1.concat(arr2);
    let l = m + n;
    let arr4 = arr3.sort(function (a, b) {
        return a - b;
    });
    return median(arr4, l);
}



let output = medianArray(a, b, a.length, b.length)

console.log(output)