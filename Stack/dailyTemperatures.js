/*
Daily Temperatures

You are given an array of integers temperatures where temperatures[i] represents the daily temperatures on the ith day.

Return an array result where result[i] is the number of days after the ith day before a warmer temperature appears on a future day. If there is no day in the future where a warmer temperature will appear for the ith day, set result[i] to 0 instead.

Input: temperatures = [30,38,30,36,35,40,28]
Output: [1,4,1,2,1,0,0]

 */


const dailyTemprature = (temp) => {
    let result = new Array(temp.length).fill(0);
    let stack = [];
    for (let i = 0; i < temp.length; i++) {
        let value = temp[i];
        while (stack.length > 0 && value > stack[stack.length - 1][0]) {
            const [t, ind] = stack.pop();
            result[ind] = i - ind;
        }
        stack.push([value, i]);
    }

    return result;
}

let temperatures = [30, 38, 30, 36, 35, 40, 28];

let value = dailyTemprature(temperatures);

console.log(value);