function sticklerThief(num, i) {
    if (i >= num.length) return 0;
    let pick = num[i] + sticklerThief(num, i + 2);
    let notPick = sticklerThief(num, i + 1);
    return Math.max(pick, notPick);
}

// const val = [2, 7, 9, 3, 1]
const val = [1, 2, 3, 1]
// const val = [2, 3, 2];
console.log(sticklerThief(val, 0)); // Output: 4

function sticklerThiefMemo(num, i, memo = []) {
    if (i >= num.length) return 0;
    if (memo[i] !== undefined) return memo[i];
    let pick = num[i] + sticklerThiefMemo(num, i + 2, memo);
    let not_pick = sticklerThiefMemo(num, i + 1, memo);
    memo[i] = Math.max(pick, not_pick);
    return memo[i];
}

console.log(sticklerThiefMemo(val, 0)); // Output: 4


function sticklerThiefBottomsUp(num) {
    if (num.length == 0) return 0;
    if (num.length == 1) return num[0];
    if (num.length == 2) return Math.max(num[0], num[1]);
    const memo = new Array(num.length + 1).fill(0);

    memo[0] = 0;
    memo[1] = num[0];

    for (let i = 2; i <= num.length; i++) {
        let pick = num[i - 1] + memo[i - 2];
        let not_pick = memo[i - 1];
        memo[i] = Math.max(pick, not_pick);
    }
    return memo[num.length];

}

console.log(sticklerThiefBottomsUp(val)); // Output: 4


function sticklerThiefConstantSpace(num) {

    if (num.length === 0) return 0;
    if (num.length === 1) return num[0];
    let prev2 = 0;
    let prev1 = num[0];
    for (let i = 1; i < num.length; i++) {
        let pick = num[i] + prev2;
        let not_pick = prev1;
        let curr = Math.max(pick, not_pick);
        prev2 = prev1;
        prev1 = curr;
    }
    return prev1;

}

console.log(sticklerThiefConstantSpace(val)); // Output: 4


function sticklerThiefInaCircle(num) {
    if (num.length == 0) return 0;
    if (num.length == 1) return num[0];
    if (num.length == 2) return Math.max(num[0], num[1]);
    const dpFunction = (num, i, n) => {
        if (i > n) return 0;
        let pick = num[i] + dpFunction(num, i + 2, n);
        let not_pick = dpFunction(num, i + 1, n);
        return Math.max(pick, not_pick);
    }

    let includeFirstElement = dpFunction(num, 0, num.length - 2);
    let excludeFirstElement = dpFunction(num, 1, num.length - 1);

    return Math.max(includeFirstElement, excludeFirstElement);

}

console.log(sticklerThiefInaCircle(val)); // Output: 4


function sticklerThiefInaCircleMemo(num) {
    if (num.length === 0) return 0;
    if (num.length === 1) return num[0];
    if (num.length === 2) return Math.max(num[0], num[1]);

    const dpFunction = (num, i, n, memo = []) => {
        if (i > n) return 0;
        if (memo[i] !== undefined) return memo[i];

        let picked = num[i] + dpFunction(num, i + 2, n, memo);
        let not_picked = dpFunction(num, i + 1, n, memo);

        return memo[i] = Math.max(picked, not_picked);
    }

    let includeFirstElement = dpFunction(num, 0, num.length - 2);
    let excludeFirstElement = dpFunction(num, 1, num.length - 1);
    return Math.max(includeFirstElement, excludeFirstElement);
}

console.log(sticklerThiefInaCircleMemo(val)); // Output: 4

function sticklerThiefInaCircleBottomsUp(num) {
    if (num.length == 0) return 0;
    if (num.length == 1) return num[0];
    if (num.length == 2) return Math.max(num[0], num[1]);

    let memo = new Array(num.length + 1).fill(0);
    memo[1] = num[0];

    for (let i = 1; i <= num.length - 1; i++) {
        let picked = num[i - 1] + (i - 2 >= 0 ? memo[i - 2] : 0);
        let not_picked = memo[i - 1];
        memo[i] = Math.max(picked, not_picked);
    }

    let result1 = memo[num.length - 1]; 

    for (let i = 2; i <= num.length - 1; i++) {
        let picked = num[i - 1] + (i - 2 >= 0 ? memo[i - 2] : 0);
        let not_picked = memo[i - 1];
        memo[i] = Math.max(picked, not_picked);
    }

    let result2 = memo[num.length - 2]; 

    return Math.max(result1, result2);
}

console.log(sticklerThiefInaCircleBottomsUp(val)); // Output: 4