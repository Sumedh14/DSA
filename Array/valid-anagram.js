/*
Valid Anagram

Input: s = "racecar", t = "carrace"
Output: true

Input: s = "jar", t = "jam"
Output: false
*/


function anagram (arr1, arr2) {
    let hashMap = new Map();
    for (let char of arr1) {
        const value = (hashMap.get(char) || 0) + 1;
        hashMap.set(char, value);
    }

    for (let char of arr2) {
        let value = 0;
        if (hashMap.has(char)) {
            value = hashMap.get(char) - 1;
            hashMap.set(char, value);
        } else {
            value = (hashMap.get(char) || 0) + 1;
            hashMap.set(char, value);
        }
    }

    for ([char, count] of hashMap) {
        if (count != 0) return false;
    }
    return true;
}



function anagram (str1, str2) {
    if (str1.length !== str2.length) return false;
    let x = str1.split("").sort();
    let y = str2.split("").sort();
    for (let i = 0; i < x.length; i++) {
        if (x[i] !== y[i]) {
            return false;
        }
    }
    return true;
}

console.log(anagram('anagram', 'nagaram'))

function anagramObj (str1, str2) {
    if (str1.length !== str2.length) return false;
    let obj1 = {};
    let obj2 = {};
    for (let i = 0; i < str1.length; i++) {
        obj1[str1[i]] = (obj1[str1[i]] || 0) + 1;
        obj2[str2[i]] = (obj1[str2[i]] || 0) + 1;
    }
    for (const key in obj1) {
        if (obj1[key] !== obj2[key])
            return false
    }
    return true;
}

const value = anagram("ab", "ab")

console.log(value);