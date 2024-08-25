/*

Group Anagram
 */

let arr = ["cat", "dog", "tacc", "god", "act"];

function groupingAnagram (arr) {
    let hashMap = new Map();
    for (let word of arr) {
        let hash = getHash(word);
        let value = hashMap.get(hash) || [];

        value.push(word);
        hashMap.set(hash, value);
    }
    return [...hashMap.values()];
}

function getHash (word) {
    let freq = new Array(26).fill(0);
    for (let char of word) {
        let charCode = getCode(char);
        freq[charCode] += 1;
    }
    return decodeFre(freq);
}

function getCode (char) {
    return char.charCodeAt(0) - 'a'.charCodeAt(0);
}

function decodeFre (frequency) {
    return frequency.toString();
}

let outPut = groupingAnagram(arr);

console.log(outPut);