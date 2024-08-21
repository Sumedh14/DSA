/*
Medium
*/
function encode (strs) {
    const value = strs.map((str) => `${str.length}#${str}`)
    return value.join("");
}

function decode(str) {
    let index = 0;
    let decodeWords = [];
    while (index < str.length) {
        let pos = str.indexOf('#', index);
        let length = parseInt(str.slice(index, pos));
        index = pos + 1;
        const s = str.slice(index,length+index);
        decodeWords.push(s);
        index = index + length;
    }
    return decodeWords;
}


// function decode (str, index = 0, decodeWord = []) {
//     while (index < str.length) {
//         const { nextIndex, word } = delimitWord(str, index);
//         decodeWord.push(word);
//         index = nextIndex;
//     }
//     return decodeWord;
// }

// function delimitWord (str, index) {
//     const delimiter = str.indexOf("#",index);

//     const length = Number(str.slice(index, delimiter));

//     const [start, end] = [(delimiter + 1), ((delimiter + length) + 1)];

//     const word = str.slice(start, end);

//     return {
//         nextIndex: end,
//         word
//     };
// }

const str = encode(["neet", "code", "love", "you"])

const value = decode(str)

console.log('encode', str);
console.log("decode", value);