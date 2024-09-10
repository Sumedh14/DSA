/*
input1 = [3,5,8]
input2 = [2,8,9,10,15]

output = [2,3,5,8,9,10,15];


input1 = [2,3,3,3,4,4];
inputb = [4,4];

output= [2,3,4];

*/


const unionOfTwoSortedArray = (inp1, inp2) => {

    let i = 0;
    let j = 0;
    let m = inp1.length;
    let n = inp2.length;
    let newArray = new Array();

    while (i < m && j < n) {
        if (i > 0 && inp1[i] == inp1[i - 1]) {
            i++;
            continue;
        }
        if (j > 0 && inp2[j] == inp2[j - 1]) {
            j++;
            continue;
        }
        if (inp1[i] <= inp2[j]) {
            newArray.push(inp1[i]);
            i++;
        } else if (inp2[j] <= inp1[i]) {
            newArray.push(inp2[j]);
            j++;
        }
    }

    while (j < n) {
        if (j > 0 & inp2[j] == inp2[j - 1]) {
            j++;
            continue;
        } else {
            newArray.push(inp2[j]);
            j++;
        }
    }

    while (i < m) {
        if (i > 0 && inp1[i] == inp1[i - 1]) {
            i++;
            continue;
        } else {
            newArray.push(inp1[i]);
            i++;
        }
    }

    return newArray
}

const value = unionOfTwoSortedArray([2, 3, 3, 3, 4, 4], [4, 4])

console.log(value)