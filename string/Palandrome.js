// Ques 2 Palandrome Number

// Input : x = 121 ---->> true
// Input : x = 10  ---->> false


function palandrome (str) {
    if (str < 0) {
        return false
    } else {
        let x = +str.toStirng().split('').reverse().join('')
        return str === x
    }

    // return x <0? false: x=== str.toString().split('').reverse().join('');
}