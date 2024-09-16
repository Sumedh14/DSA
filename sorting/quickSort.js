/*
Quick Sort- Lumuto partition
[10,80,30,90,40,50,70];
*/

function LumbutoPartition (arr, l, h) {
    let pivot = arr[h];
    let i = l - 1;
    for (let j = l; j <= h - 1; j++) {
        if (arr[j] < pivot) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
    [arr[i + 1], arr[h]] = [arr[h], arr[i + 1]];
    // return i+1
    return arr;
}

let arr = [10, 80, 30, 90, 40, 50, 70];

let n = arr.length;

arr = LumbutoPartition(arr, 0, n - 1);
console.log(arr);

