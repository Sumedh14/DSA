/*
Medium

Input: s = "AAABABB", k = 1
Output: 5
*/

const repeating = (str, k) => {
    let N = str.lenght;
    let charCode = new Array(26).fill(0);

    let window_start = 0;
    let max_lenght = 0;
    let max_count = 0;
    for (let window_end = 0; window_end < N; window_end++) {
        charCode[str.charCodeAt(window_end) - 'A'.charCodeAt(0)]++;
        let count = charCode[str.charCodeAt(window_end) - 'A'.charCodeAt(0)]
        max_count = Math.max(max_count, count)
        while (window_end - window_start - max_count + 1 > k) {
            charCode[str.charCodeAt(window_start) - 'A'.charCodeAt(0)]--;
            window_start++;
        }
        max_lenght = Math.max(max_lenght, window_end - window_start + 1);
    }
    return max_lenght;
}




let characterReplacement = (s, k) => {
    let result = 0;
    let hashMap = new Map();
    let left = 0;
    for (let i = 0; i < s.length; i++) {
        let len = i - left + 1
        hashMap.set(s[i], 1 + (hashMap.get(s[i]) || 0));
        let count = Math.max([...hashMap.values()]);
        if (len - count > k) {
            hashMap.set(s[left], hashMap.get(s[left]) - 1);
            left++;
        }
        len = i - left + 1;
        result = Math.max(result, len);
    }
    return result;
}


// let s = "AAABABB", k = 1
let s1 = "AAAA", k1 = 2

// const value = characterReplacement(s, k);
const value1 = characterReplacement(s1, k1);

// console.log(value);
console.log(value1);