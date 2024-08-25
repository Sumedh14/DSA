/*
Hard

You are given an array of integers heights where heights[i] represents the height of a bar. The width of each bar is 1.
Return the area of the largest rectangle that can be formed among the bars.

Input: heights = [7,1,7,2,2,4]
Output: 8
*/


// const largestHistogram = (heights) => {
//     let maxheight = 0;
//     let stack = [];
//     for (let i = 0; i < heights.length; i++) {
//         let h = heights[i];
//         if (i === 0) {
//             stack.push([i, h]);
//             maxheight = Math.max(maxheight, h)
//             continue;
//         }
//         while (stack.length > 0) {
//             if (stack[stack.length - 1] >= h) {
//                 let [index, height] = stack[stack.length - 1]
//                 let area = ((index + 1) * h) + 1
//                 maxheight = Math.max(maxheight, area);
//                 stack.push([index, h]);
//                 break;
//             } else {
//                 let [index, height] = stack[stack.length - 1];
//                 let area = ((index + 1) * h) + 1
//                 maxheight = Math.max(maxheight, area);
//                 stack.push([index, h]);
//                 break;
//             }
//         }
//     }
//     return maxheight;
// }




// const value1 = largestHistogram([7, 1, 7, 2, 2, 4]);


const largestHistogram = (heights) => {
    let maxheight = 0;
    let stack = [];
    for (let i = 0; i < heights.length; i++) {
        let start = i;
        while (stack.length > 0 && stack[stack.length - 1][1] > heights[i]) {
            const [index, height] = stack.pop();
            maxheight = Math.max(maxheight, (i - index) * height);
            start = index;
        }
        stack.push([start, heights[i]]);
    }
    for (let [index, height] of stack) {
        maxheight = Math.max(maxheight, (heights.length - index) * height);
    }
    return maxheight;
}

const value = largestHistogram([1, 3, 7])

// console.log(value1);
console.log(value);