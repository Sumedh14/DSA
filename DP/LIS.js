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
console.log(LongestIncreasingSubsequenceBottomUp([3, 10, 2, 1, 20]));
console.log(LongestIncreasingSubsequenceBottomUp([3, 2]));
console.log(LongestIncreasingSubsequenceBottomUp([50, 3, 10, 7, 40, 80]));

//// LIS and Variants

function maximumLengthPairChair(arr) {
    let n = arr.length;
    if (n === 0) return 0;
    arr.sort((a, b) => a[0] - b[1]);
    const dpArr = Array.from({ length: n + 1 }, () => Array(n + 1).fill(-1));
    const dp = (i, prev) => {
        if (i >= n) return 0;
        if (i > arr.length) return 0;
        if (dpArr[i][prev + 1] !== -1) return dpArr[i][prev + 1];
        let taken = (prev === -1 || arr[prev][1] < arr[i][0]) ? (1 + dp(i + 1, i)) : 0;
        let not_taken = dp(i + 1, prev);

        return dpArr[i][prev + 1] = Math.max(taken, not_taken);
    }

    return dp(0, -1);
}

console.log(maximumLengthPairChair([[1, 2], [7, 8], [4, 5]])); //output: 3

function maximumLengthPairChairBottomUp(arr) {
    let n = arr.length;
    if (n === 0) return 0;
    arr.sort((a, b) => a[1] - b[1]);
    let count = 1;
    let prev = 0;
    for (let i = 1; i < n; i++) {
        if (arr[i][0] > arr[prev][1]) {
            count++;
            prev = i;
        }
    }
    return count;
}

console.log(maximumLengthPairChairBottomUp([[1, 2], [7, 8], [4, 5]])); //output: 2


function longestStringChainMemo(arr) {
    const n = arr.length;
    if (n == 0) return 0;
    if (n === 1) return 1;

    arr.sort((a, b) => a.length - b.length);
    const dpArray = Array.from({ length: n }, () => new Array(n + 1).fill(-1));
    const dp = (i, prev) => {
        if (i >= n) return 0;
        if (dpArray[i][prev + 1] !== -1) return dpArray[i][prev + 1];
        let take = (prev === -1 || isPred(arr[prev], arr[i])) ? 1 + dp(i + 1, i) : 0;
        let not_take = dp(i + 1, prev);

        return dpArray[i][prev + 1] = Math.max(take, not_take);
    }

    const isPred = (sub, parent) => {
        if (parent.length !== sub.length + 1) return false;
        let i = 0, j = 0;
        while (i < parent.length) {
            if (j < sub.length && parent[i] === sub[j]) {
                i++;
                j++;
            } else {
                i++;
            }
        }
        return j === sub.length;
    }
    return dp(0, -1);
}

console.log("longestStringChainMemo", longestStringChainMemo(["ba", "b", "a", "bca", "bda", "bdca"])); //output: 4

function longestStringChainBottomUp(arr) {
    const n = arr.length;
    if (n == 0) return 0;
    if (n === 1) return 1;
    arr.sort((a, b) => a.length - b.length);
    let count = 1;
    let prev = 0;
     const isPred = (sub, parent) => {
        if (parent.length !== sub.length + 1) return false;
        let i = 0, j = 0;
        while (i < parent.length) {
            if (j < sub.length && parent[i] === sub[j]) {
                i++;
                j++;
            } else {
                i++;
            }
        }
        return j === sub.length;
    }
    for (let i = 1; i < n; i++) {
        if (isPred(arr[prev], arr[i])) {
            count++; prev = i;
        }
    }
    return count;
}

console.log("longestStringChainBottomUp", longestStringChainBottomUp(["abc", "a", "ab"])); //output: 4
