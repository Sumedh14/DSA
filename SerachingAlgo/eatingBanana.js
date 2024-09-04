/*
Eating Bananas
You are given an integer array piles where piles[i] is the number of bananas in the ith pile. You are also given an integer h, which represents the number of hours you have to eat all the bananas.
You may decide your bananas-per-hour eating rate of k. Each hour, you may choose a pile of bananas and eats k bananas from that pile. If the pile has less than k bananas, you may finish eating the pile but you can not eat from another pile in the same hour.
Return the minimum integer k such that you can eat all the bananas within h hours.

Input: piles = [1,4,3,2], h = 9
Output: 2

[1,4,3,2]

[1,2,3,4]
 L  K  R
*/


const bananas = (nums, h) => {
    let left = 0, right = Math.max(...nums);
    let result = 0
    while (left <= right) {
        let k = Math.floor((left + right) / 2);
        let time = 0;
        for (let b of nums) {
            time += Math.ceil(b / k);
        }
        if (time <= h) {
            result = k;
            right = k - 1
        } else {
            left = k + 1;
        }
    }
    return result;
}
