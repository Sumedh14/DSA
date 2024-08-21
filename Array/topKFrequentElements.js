/*
Top-K-frequent-Elements
 */

// function top_K_FrequencyElements (arr, k) {
//     let hashMap = new Map();

//     for (let n of arr) {
//         if (hashMap.has(n)) {
//             const value = hashMap.get(n) + 1;
//             hashMap.set(n, value);
//         } else {
//             const value = 1;
//             hashMap.set(n, value);
//         }
//     }

//     let queue = [...hashMap];

//     queue.sort(function (a, b) {
//         if (a[1] == b[1]) { return b[0] - a[0] }
//         else {
//             return b[1] - a[1]
//         }
//     })

//     let element = [];
//     let l = 0;
//     for (let i = 0; i < k; i++) {
//         element.push(queue[i][l]);
//         l = 0;
//     }
//     return element;
// }


function top_K_FrequencyElements (arr, k) {
    let hashMap = new Map();
    for (let num of arr) {
        let value = 1;
        if (hashMap.has(num)) {
            const value = (hashMap.get(num) || 0) + 1
            hashMap.set(num, value);
        } else {
            hashMap.set(num, value);
        }
    }

    const queue = [...hashMap];

    queue.sort(function (a, b) {
        if (a[1] == b[1]) {
            return b[0] - a[0]
        }
        else {
            return b[1] - a[1];
        }
    })

    let element = [];
    let l = 0;
    for (let i = 0; i < k; i++) {
        element.push(queue[i][l]);
        l = 0;
    }
    return element;
}


let arr = [1, 2, 2, 3, 3, 3];
let k = 2;

let outPut = top_K_FrequencyElements(arr, k)

console.log(outPut)
