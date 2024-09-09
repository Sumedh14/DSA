/*
arr1 = [2, 3, 6, 7, 9];
arr2 = [1, 4, 8, 10];
*/


const mergeSort = (arr1, arr2) => {
    let m = arr1.length;
    let n = arr2.length;
    let i = 0;
    let j = 0;
    let k = 0;
    const newArray = new Array(m + n).fill(0);
    while (i < m && j < n) {
        if (arr1[i] <= arr2[j]) {
            newArray[k++] = arr1[i++];
        } else {
            newArray[k++] = arr2[j++];
        }
    }
    while (i < m) {
        newArray[k++] = arr1[i++];
    }
    while (j < n) {
        newArray[k++] = arr2[j++]
    }
    return newArray;
}

const arr1 = [2, 3, 6, 7, 9];
const arr2 = [1, 4, 8, 10];

const value = mergeSort(arr1, arr2);

console.log(value);


/*
Merge function of Merge Sort;

input= [10,15,20,11,30]

low = 0;
mid = 2;
high = 4;

*/


const mergeFunction = (arr, low, mid, high) => {
    let newArray = new Array(arr.length).fill(0);
    let j = mid + 1;
    let i = 0;
    let k = 0;

    while (i < mid && j < high) {
        if (arr[low] <= arr[j]) {
            newArray[k++] = arr[low++];
        } else {
            newArray[k++] = arr[j++];
        }
    }

    while (low <= mid) {
        newArray[k++] = arr[low++];
    }
    while (j <= high) {
        newArray[k++] = arr[j++];
    }
    return newArray;
}


const input = [10, 15, 20, 11, 30]
const low = 0;
const mid = 2;
const high = 4;

const valuef = mergeFunction(input, low, mid, high);

console.log(valuef);