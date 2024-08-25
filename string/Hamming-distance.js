// Ques 3 : Hanning Distance

// Given to string x and y return the mamming distance between them
// Input : x= 'hello' , y ='hyllr'
// Output : 2
// Exception:
// (hello)
// (hwllr)
//   ^  ^

function hammingString (x, y) {
    if (x.length !== y.length) {
        return 0
    } else {
        let count = [];
        for (let i = 0; i < x.length; i++) {
            if (x[i] !== y[i]) {
                count.push(i)
            }
        }
        return { length: count.length, position: count }
    }
}

console.log(hammingString('hello', 'hyllr'))



//Input : x = 1 , y = 4
// Output: 2
// Exception: 
// 1: (0,0,0,1)
// 4: (0,1,0,0)
//       ^   ^

// let num = 2
// num.toString() => '2'
// num.toString(2) => '10'
// let num = 9
// num.toString(2)=> '1001'


function hammingDistance (x, y) {
    x = x.toString(2);
    y = y.toString(2);

    if (x.length < y.length) {
        while (x.length !== y.length) x = "0" + x;
    } else {
        while (x.length !== y.length) y = "0" + y;
    }
    let count = [];
    for (let i = 0; i < x.length; i++) {
        if (x[i] !== y[i]) {
            count.push(i)
        }
    }
    return { length: count.length, position: count }

}

console.log(hammingDistance(2, 9));