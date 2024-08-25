/*
    Medium

    Input: numbers = [1,2,3,4], target = 3
    Output: [1,2]
*/

// let twoPointer = (arr, target) => {
//     let [left, right] = [0, arr.lenght - 1]
//     while (left < right) {
//         sum = arr[left] + arr[right];
//         const isTarget = sum === target;
//         if (isTarget) return [left + 1, right + 1];

//         const isTargetGreatger = sum < target;
//         if (isTargetGreatger) left++;

//         const isTargetLess = sum > target;
//         if (isTargetLess) right--;
//     }
//     return [-1, 1]
// }




const towPointer = (arr, target) => {
    let [right, left] = [arr.length - 1, 0];
    while (left < right) {
        let sum = arr[left] + arr[right];
        const isEqual = sum === target;
        if (isEqual) return [left + 1, right + 1];

        const isLess = sum < target;
        if (isLess) left++;

        const isGreater = sum > target;
        if (isGreater) right--;
    }
    return [-1, -1]
}

const numbers = [1, 2, 3, 4], target = 3

const value = towPointer(numbers, target);

console.log(value);