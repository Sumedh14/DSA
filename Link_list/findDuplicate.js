/*
Find Duplicate Integer

You are given an array of integers nums containing n + 1 integers. Each integer in nums is in the range [1, n] inclusive.
Every integer appears exactly once, except for one integer which appears two or more times. Return the integer that appears more than once.

floyd's tortoise and hare

Example 1:
Input: nums = [1,2,3,2,2]
*/


const duplicate = (arr) => {
    let slow = 0;
    let fast = 0;
    while (true) {
        slow = arr[slow];
        fast = arr[arr[fast]];
        if (slow == fast) {
            break;
        }
    }
    let slow1 = 0;
    while (true) {
        slow1 = arr[slow1];
        slow = arr[slow];
        if (slow == slow1) {
            return slow;
        }
    }
}