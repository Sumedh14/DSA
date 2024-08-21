/*
Easy
 */

const prices = [10, 1, 5, 6, 7, 1]

const BuyAndSellStock = (arr) => {
    let [left, right] = [0, 1];
    let maxProfit = 0;
    while (right < arr.length) {
        const canSlide = arr[right] <= arr[left]
        if (canSlide) left = right;

        const window = arr[right] - arr[left];

        maxProfit = Math.max(maxProfit, window)
        right++;
    }
    return maxProfit;
}

const BuyAndSellStock1 = (arr) => {
    let [left, right] = [0, 1];
    let maxProfit = 0;
    while (right < arr.length) {
        const slide = arr[right] <= arr[left];
        if (slide) {
            left = right;
            right++;
            continue;
        } else {
            const window = arr[right] - arr[left];
            maxProfit = Math.max(maxProfit, window);
            right++;
        }
    }
    return maxProfit;
}

const value = BuyAndSellStock(prices);
const value1 = BuyAndSellStock1(prices);
console.log(value)
console.log(value1)