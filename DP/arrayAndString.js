function MaximumAlternatingSubsequenceSum(num) {
    let result = [];
    let sets = [];
    if (num.length == 0) return 0;
    if (num.length == 1) return num[0];

    const dpSubsequence = (num, result, sets, count) => {
        if (count >= num.length) {
            result.push([...sets]);
            return;
        }
        sets.push(num[count]);
        dpSubsequence(num, result, sets, count + 1);
        sets.pop();
        dpSubsequence(num, result, sets, count + 1);
    }
    dpSubsequence(num, result, sets, 0);

    let maxSum = 0;

    for (let set of result) {
        let sum = 0;
        for (let i = 0; i < set.length; i++) {
            if (i % 2 == 0) {
                sum += set[i];
            } else {
                sum -= set[i];
            }
        }
        maxSum = Math.max(maxSum, sum);
        if (set.length === 0) {
            maxSum = Math.max(maxSum, 0);
        }
    }
    return maxSum;
}

console.log(MaximumAlternatingSubsequenceSum([6, 2, 1, 2, 4, 5]));


function MaximumAlternatingSubsequenceSumMemoization(num) {
    let memo = {};
    const dpFunction = (i, flag) => {
        if (i >= num.length) return 0;
        if (memo[`${i}-${flag}`] !== undefined) return memo[`${i}-${flag}`];
        let picked = dpFunction(i + 1, !flag) + (flag ? num[i] : -num[i]);
        let not_picked = dpFunction(i + 1, flag);

        memo[`${i}-${flag}`] = Math.max(picked, not_picked);
        return memo[`${i}-${flag}`];
    }

    return dpFunction(0, true);
}

console.log(MaximumAlternatingSubsequenceSumMemoization([4, 2, 5, 3]));


// function MaximumAlternatingSubsequenceSumBottomUp(num) {
//     if (num.length == 0) return 0;
//     if (num.length == 1) return num[0];

//     const dp = new Array(num.length).fill(0);
//     dp[0] = num[0];
//     for (let i = 1; i < num.length; i++) {
//         let picked = Math.max(dp[i - 1] - num[i], dp[i - 1]);
//         let not_picked = Math.max(dp[i - 1] + num[i], dp[i - 1]);
//         dp[i] = Math.max(picked, not_picked);
//     }
//     return dp[num.length - 1];
// }

// console.log(MaximumAlternatingSubsequenceSumBottomUp([4, 2, 5, 3]));
