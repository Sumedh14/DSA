function removeDuplicateLetters (s) {
    let arr = [];
    for (let i = 0; i < s.length; i++) {
        if (arr.includes(s[i])) {
            continue
        } else {
            arr.push(s[i])
        }
    }
    return arr.join('');
};

console.log(removeDuplicateLetters("bcabc hello world"))