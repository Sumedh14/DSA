const generatePerentheses = (n) => {
    let res = [];
    parentheses(res, n, 0, 0, "");
    return res;
}

const parentheses = (res, n, open, close, str) => {
    if (open === n && close === n) {
        res.push(str);
        return;
    }
    if (open > close) {
        parentheses(res, n, open, close + 1, str + ")");
    }
    if (open < n) {
        parentheses(res, n, open + 1, close, str + '(');
    }
}

let value = generatePerentheses(3);

console.log(value);