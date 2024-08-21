/*
Medium
*/

// const PermutationOfString = (str1, str2) => {
//     let k = str1.length;
//     let str = ''
//     for (let i = 0; i < str2.length; i++) {
//         let j = 0;
//         let newString = str2.slice(i, i + k)
//         while (j < k) {
//             if (newString.includes(str1[j])) {
//                 str += str1[j];
//                 let val = newString[j];
//                 str1 = str1.replace(val, 1)
//                 if (str.length == str1.length) {
//                     return true
//                 }
//                 j++;
//             } else {
//                 str = '';
//                 break;
//             }
//         }
//     }
//     return false;
// }
const PermutationOfString = (str1, str2) => {
    let k = str1.length;
    let str = ''
    for (let i = 0; i < str2.length; i++) {
        let newString = str2.slice(i, i + k)
        let ispermuted = anagram(str1, newString);
        if (ispermuted) {
            return true;
        }
    }
    return false;
}

const anagram = (str1, str2) => {
    if (str1.length !== str2.length) return false;
    let obj1 = {};
    let obj2 = {};
    for (let i = 0; i < str1.length; i++) {
        obj1[str1[i]] = (obj1[str1[i]] || 0) + 1;
        obj2[str2[i]] = (obj2[str2[i]] || 0) + 1;
    }
    for (const key in obj1) {
        if (obj1[key] !== obj2[key])
            return false
    }
    return true;
}


var checkInclusion = function (s1, s2) {
    let l = 0;
    let map = {};
    for (let s of s1) map[s] = (map[s] || 0) + 1
    for (let i = 0; i < s2.length; i++) {
        let currChar = s2[i];
        map[currChar] = (map[currChar] || 0) - 1
        while (map[currChar] < 0) {
            map[s2[l]] += 1
            l++;
        }
        if (s1.length === i - l + 1) return true
    }
    return false
};
let s1 = "ab", s2 = "eidbaooo";
// let s3 = "ab", s4 = "eidboaoo"
let s5 = "hello", s6 = "ooolleoooleh"


// let per = PermutationOfString(s1, s2);
// let per3= checkInclusion  (s1, s2) 
let per4= checkInclusion  (s5, s6) 

// let per1 = PermutationOfString(s3, s4);
// let per2 = PermutationOfString(s5, s6);
// console.log(per)
// console.log(per3)
console.log(per4)
// console.log(per1)
// console.log(per2)