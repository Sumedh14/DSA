function LongestIncreasingSubsequence(arr) {
    const n = arr.length;
    const dpSequence = (i, prev) => {
        if (i >= n) {
            return 0;
        }

        let take = (prev == -1 || arr[prev] < arr[i]) ? (1 + dpSequence(i + 1, i)) : 0;
        let not_take = dpSequence(i + 1, prev);

        return Math.max(take, not_take);
    }

    return dpSequence(0, -1);

}

console.log(LongestIncreasingSubsequence([10, 9, 2, 5, 3, 7, 101, 18]));


function LongestIncreasingSubsequenceMemo(arr) {
    const n = arr.length;
    const dp = Array.from({ length: n + 1 }, () => Array(n + 1).fill(-1));

    const dpSequence = (i, prev) => {
        if (i >= n) return 0;

        if (dp[i][prev + 1] !== -1) return dp[i][prev + 1];

        let take = (prev == -1 || arr[prev] < arr[i]) ? (1 + dpSequence(i + 1, i)) : 0;
        let not_take = dpSequence(i + 1, prev);

        return dp[i][prev + 1] = Math.max(take, not_take);
    }

    return dpSequence(0, -1);

}

console.log(LongestIncreasingSubsequenceMemo([10, 9, 2, 5, 3, 7, 101, 18]));


function LongestIncreasingSubsequenceBottomUp(arr) {
    const n = arr.length;
    let prev = 0;
    let count = 0;
    for (let i = 0; i < n; i++) {
        if (arr[i] <= arr[i - 1]) {
            continue;
        }
        else {
            for (let j = i + 1; j < n; j++) {
                if (arr[i] <= arr[j] && prev <= arr[j]) {
                    prev = arr[j];
                }
            }
            count++;
        }
    }
    return count;
}


console.log(LongestIncreasingSubsequenceBottomUp([10, 9, 2, 5, 3, 7, 101, 18]));
