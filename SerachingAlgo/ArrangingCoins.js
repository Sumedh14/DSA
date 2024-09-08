/*


You have n coins and you want to build a staircase with these coins. The staircase consists of k rows where the ith row has exactly i coins. The last row of the staircase may be incomplete.
Given the integer n, return the number of complete rows of the staircase you will build.

Input: n = 5
Output: 2
Explanation: Because the 3rd row is incomplete, we return 2.
*/


const arrangingCoins = (n) => {

    let left = 1;
    let right = n;
    let coin = 0;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        for (let i = 1; i <= mid; i++) {
            coin += i;
        }
        if (coin > n) {
            right = mid - 1;
            coin = 0;
        } else {
            left = mid + 1;
            coin = 0;
        }
    }
    return left - 1;
}

const value = arrangingCoins(5);
console.log(value);