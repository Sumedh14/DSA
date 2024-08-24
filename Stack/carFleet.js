/*
There are n cars traveling to the same destination on a one-lane highway.

You are given two arrays of integers position and speed, both of length n.

position[i] is the position of the ith car (in miles)
speed[i] is the speed of the ith car (in miles per hour)
The destination is at position target miles.

A car can not pass another car ahead of it. It can only catch up to another car and then drive at the same speed as the car ahead of it.

A car fleet is a non-empty set of cars driving at the same position and same speed. A single car is also considered a car fleet.

If a car catches up to a car fleet the moment the fleet reaches the destination, then the car is considered to be part of the fleet.

Return the number of different car fleets that will arrive at the destination.

Input: target = 10, position = [4,1,0,7], speed = [2,2,1,1]

Output: 3


*/


// const carFleet1 = (target, position, speed) => {
//     let [m, n] = position;
//     let [s1, s2] = speed;

//     while (m <= target || n <= target) {
//         if (m === target) return "m";
//         if (n === target) return "n";
//         m += s1;
//         n += s2;
//     }
// }

// const value1 = carFleet1(8, [1, 4], [3, 2]);

// console.log(value1);


const carFleet = (target, position, speed) => {
    let carFleet = 0;
    let n = position.length;
    let pares = position.map((p, i) => [p, speed[i]]);
    pares.sort((a, b) => b[0] - a[0])

    const time = new Array(n);
    for (let i = 0; i < n; i++) {
        time[i] = (target - pares[i][0]) / pares[i][1];
        if (time[i] <= time[i - 1]) {
            time[i] = time[i - 1];
        }
        else {
            carFleet++;
        }
    }
    return carFleet;
}


const value = carFleet(10, [4, 1, 0, 7], [2, 2, 1, 1]);

console.log(value);