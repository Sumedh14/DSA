/*

Group Anagram
 */

let arr = ["cat", "dog", "tacc", "god", "act"];

// function groupingAnagram (arr) {
//     const hashMap = new Map();
//     groupWord(arr, hashMap);

//     return [...hashMap.values()];
// }

// function groupWord (arr, hashMap) {
//     for (const original of arr) {
//         const hash = getWord(original);
//         const values = hashMap.get(hash) || [];

//         values.push(original);
//         hashMap.set(hash, values);
//     }
// }

// function getWord (word) {
//     const frequency = new Array(26).fill(0);
//     for (const char of word) {
//         const code = charCode(char);
//         frequency[code] += 1;
//     }
//     return buildHash(frequency);
// }

// const charCode = (char) => char.charCodeAt(0) - 'a'.charCodeAt(0);

// const buildHash = (frequency) => frequency.toString();


function groupingAnagram (arr) {
    let hashMap = new Map();
    groupWords(arr, hashMap);
    return [...hashMap.values()];
}

function groupWords (arr, hashMap) {
    for (let word of arr) {
        let hash = getHash(word);
        const value = hashMap.get(hash) || [];

        value.push(word);
        hashMap.set(hash, value);
    }
}

function getHash (word) {
    let frequency = new Array(26).fill(0);
    for (char of word) {
        let charCode = getCode(char);
        frequency[charCode] += 1;
    }

    return decodeFre(frequency);
}

function getCode (char) {
    return char.charCodeAt(0) - 'a'.charCodeAt(0);
}

function decodeFre (frequency) {
    return frequency.toString();
}

let outPut = groupingAnagram(arr);

console.log(outPut);