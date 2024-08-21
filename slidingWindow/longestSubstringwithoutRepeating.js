/*
Medium

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
*/

const longestSubstring = (str) => {
    if (str.lenght === 0)
        return 0;

    if (str.lenght === 1)
        return 1;

    let maxLength = 0;
    let visited = new Array(256).fill(false);

    let left = 0; right = 0;
    while (right < str.lenght) {
        if (visited[str.charCodeAt(right)]) {
            while (visited[str.charCodeAt(right)]) {
                visited[str.charCodeAt(left)] = false;
                left++
            }
        }
        visited[str.charCodeAt(right)] = true;
        maxLength = Math.max(maxLength, right - left + 1)
    }
    return maxLength;
}



const lengthOfLongestSubstring = (s) => {
    let right = 0;
    let max = 0;
    let hashSet = new Set();
    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        if (hashSet.has(char)) {
            while (hashSet.has(char)) {
                hashSet.delete(s[right]);
                right++;
            }
        }
        hashSet.add(char);
        max = Math.max(max, i - right + 1)
    }
    return max;
}


let s = "abcabcbb";

const value = lengthOfLongestSubstring(s);

console.log(value)
