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
        if (arr1[i] < arr2[j]) {
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