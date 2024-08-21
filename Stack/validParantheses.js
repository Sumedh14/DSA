// function validParantheses (input) {
//     if (!input) {
//         return false
//     } else {
//         let stack = [];
//         let parems = '() {} []'
//         for (let i = 0; i < input.length; i++) {
//             stack.push(input[i])

//             let open = stack[stack.length - 2];
//             let close = stack[stack.length - 1];

//             let patParantheses = open + close;
//             if (parems.includes(patParantheses)) {
//                 stack.pop();
//                 stack.pop();
//             }
//         }
//         return stack.length === 0;
//     }
// }

function validParantheses (input) {
    if (!input) {
        return false
    } else {
        let stack = [];
        let stackObj = {
            ')': '(',
            ']': '[',
            '}': '{'
        }

        let i = 1;
        for (let j = 0; j <= input.length + 1; j++) {
            if (!stack.length) {
                stack.push(input[i - 1]);
            }
            if (Object.keys(stackObj).includes(stack[stack.length - 1])) {
                if (stack[stack.length - 2] == stackObj[stack[stack.length - 1]]) {
                    stack.pop();
                    stack.pop();
                }
            } else {
                stack.push(input[i]);
                i++;
            }
        }

        return stack.length === 0;
    }
}

// function validParantheses (input) {
//     const hashMap = { '(': ')', '{': '}', '[': ']' }
//     const stack = [];
//     for (let ch of input) {
//         if (hashMap[ch]) {
//             stack.push(hashMap[ch])
//         } else if (stack.length > 0 && stack[stack.length - 1] == ch) {
//             stack.pop();
//         }
//         else {
//             return false;
//         }
//     }
//     return stack.length === 0;
// }

console.log(validParantheses('[]'))