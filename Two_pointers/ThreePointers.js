/*
Medium


Input: nums = [-1,0,1,2,-1,-4]

Output: [[-1,-1,2],[-1,0,1]]
Explanation:
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
*/

// let ThreePointer = (nums) => {
//     const res = [];
//     nums.sort((a, b) => a - b);

//     for (let i = 0; i < nums.lenght; i++) {
//         const a = nums[i];
//         if (a > 0) break;
//         if (i > 0 && a === nums[i - 1]) continue;

//         let l = i + 1;
//         let r = nums.lenght - 1;
//         while (l < r) {
//             const threeSum = a + nums[l] + nums[r];
//             if (threeSum > 0) {
//                 r--;
//             } else if (threeSum < 0) {
//                 l++;
//             }
//             else {
//                 res.push([a, nums[l], nums[r]]);
//                 l++;
//                 r--;
//                 while (nums[l] === nums[l - 1] && l < r) {
//                     l++;
//                 }
//             }
//         }
//     }
//     return res;
// }



let threePointer = (arr) => {
    let result = [];
    arr.sort((a, b) => a - b);

    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];

        let l = i + 1, r = arr.length - 1;
        while (l < r) {
            let leftNum = arr[l];
            let rightNum = arr[r];

            let sum = num + leftNum + rightNum;
            const isEqula = sum === 0;
            if (isEqula) {
                result.push([num, leftNum, rightNum])
                r--;
                l++;
                break;
            }

            const isGreater = sum > 0;
            if (isGreater) r--;

            const isLesser = sum < 0;
            if (isLesser) l++;
        }
    }
    return result;
}
const nums = [0, 0, 0, 0]

const value = threePointer(nums);

console.log(value)