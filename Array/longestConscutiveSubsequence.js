/*
Hard

Given an array of integers nums, return the length of the longest consecutive sequence of elements.
A consecutive sequence is a sequence of elements in which each element is exactly 1 greater than the previous element.

Input: nums = [2,20,4,10,3,4,5]
Output: 4

*/

function longestConsectiveSubsequence (arr) {
    let newSet = new Set(arr);
    for (const num of [...newSet]) {
        let previous = num - 1
        if (newSet.has(previous)) continue;

        let [currNum, score] = [num, 1];

        const isStreak = () => newSet.has(currNum + 1);
        while (isStreak()) {
            currNum++;
            score++;
        }
        maxScore = Math.max(maxScore, score);
    }
    return maxScore;
}