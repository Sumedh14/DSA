/*

input1 = [3,5,10,10,10,15,15,20];
input2 = [5,10,10,15,30];

output = [5,10,15];

*/

const intersectionOfTwoSortedArray = (input1, input2) => {
    let i = 0;
    let j = 0;
    let m = input1.length;
    let n = input2.length;
    let newArray = new Array();
    while (i < m && j < n) {
        if (i > 0 && input1[i] == input1[i - 1]) {
            i++;
            continue
        }
        if (input1[i] < input2[j]) {
            i++;
        } else if (input1[i] > input2[j]) {
            j++;
        }
        if (input1[i] == input2[j]) {
            newArray.push(input1[i]);
            i++;
            j++;
        }
    }
    return newArray;
}


const value = intersectionOfTwoSortedArray([3, 5, 10, 10, 10, 15, 15, 20], [5, 10, 10, 15, 30]);

console.log(value);