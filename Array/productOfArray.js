/*
Product of Array Except Self
 */


let arr = [1, 2, 3, 4]

function exceptSelf (arr) {
    let output = [];
    let prefix = 1;
    let postfix = 1;
    for (let i = 0; i < arr.length; i++) {
        output[i] = prefix;
        prefix *= arr[i];
    }
    for (let i = arr.length - 2; i >= 0; i--) {
        postfix *= arr[i + 1];
        output[i] *= postfix;
    }
    return output;
}

let output1 = exceptSelf(arr)

console.log(output1)