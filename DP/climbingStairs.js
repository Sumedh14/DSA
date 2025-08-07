function climbingStairs(n) {
    if (n < 0) return 0;
    if (n === 0) return 1;
    return climbingStairs(n - 1) + climbingStairs(n - 2);
}


function climbingStairsMemo(n, memo = []) {
    if (n < 0) return 0;
    if (n == 0) return 1;
    if (memo[n] !== undefined) return memo[n];
    memo[n] = climbingStairsMemo(n - 1, memo) + climbingStairsMemo(n - 2, memo);
    return memo[n];
}

function climbingStairsBottomsUp(n) {
    if (n == 0) return 0;
    if (n == 1) return 1;
    const arr = new Array(n + 1).fill(-1);
    arr[0] = 1;
    arr[1] = 1;
    for (let i = 2; i <= n; i++) {
        arr[i] = arr[i - 1] + arr[i - 2];
    }
    return arr[n];
}

function climbingStairscConstantSpace(n) {
   let a = 1, b = 1;
   for (let i = 2; i <= n; i++) {
       const temp = a + b;
       a = b;
       b = temp;
   }    
    return b;
}

const val = 5;
console.log(climbingStairs(val)); // Output: 5

console.log(climbingStairsMemo(val));
console.log(climbingStairsBottomsUp(val));
console.log(climbingStairscConstantSpace(val));