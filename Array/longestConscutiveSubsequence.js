/*
Hard
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