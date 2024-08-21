/*
You are given an array of strings tokens that represents a valid arithmetic expression in Reverse Polish Notation.

Input: tokens = ["1","2","+","3","*","4","-"]

Output: 5

Explanation: ((1 + 2) * 3) - 4 = 5

 */

let reveresPolish = (tokens) => {
    let stack = [];
    for (const char of tokens) {
        if (char === '+') {
            stack.push(stack.pop() + stack.pop());
        } else if (char === '-') {
            let a = stack.pop();
            let b = stack.pop();
            stack.push(b - a);
        } else if (char === '*') {
            stack.push(stack.pop() * stack.pop());
        } else if (char === '/') {
            let a = stack.pop();
            let b = stack.pop();
            stack.push(Math.trunc(b / a));
        } else {
            stack.push(parseInt(char));
        }
    }
    return stack.pop();
}

let tokens = ["1", "2", "+", "3", "*", "4", "-"];

let value = reveresPolish(tokens);

console.log(value);