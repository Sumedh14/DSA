/*
Medium
*/



// let trappingRainWater = (arr) => {
//     let [left, right] = [0, arr.length - 1]
//     let [lmax, rmax] = [arr[0], arr[arr.lenght - 1]]
//     let res = 0;
//     while (left < right) {
//         if (lmax < rmax) {
//             if (lmax < arr[left]) {
//                 lmax = arr[left];
//             } else {
//                 res += (lmax - arr[left]);
//             }
//             left++;
//         } else {
//             if (rmax < arr[right]) {
//                 rmax = arr[right];
//             } else {
//                 res += (rmax - arr[right]);
//             }
//             right--;
//         }
//     }
//     return res;
// }


const trappingRainWater = (arr) => {
    let [left, right] = [0, arr.length - 1];
    let [lmax, rmax] = [0, 0]
    let result = 0;
    while (left < right) {
        lmax = Math.max(lmax, arr[left]);
        rmax = Math.max(rmax, arr[right]);

        if (arr[left] < arr[right]) {
            result += lmax - arr[left];
            left++;
        } else {
            result += rmax - arr[right];
            right--;
        }
    }
    return result;
}


const trappingRainWaterMaxArea = (arr) => {
    let [left, right] = [0, arr.length - 1];
    let [area, containerLength] = [0, 0]
    let result = 0;

    while (left < right) {
        containerLength = right - left;
        area = containerLength * (Math.min(arr[left], arr[right]));
        result = Math.max(result, area);
        if (arr[left] < arr[right]) {
            left++;
        } else {
            right--;
        }
    }
    return result;
}

let height = [2, 0, 3, 1, 0, 1, 3, 2, 1]

let output = trappingRainWater(height);
console.log(output);