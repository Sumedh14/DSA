// Que4 - valid Anagram

// Input : (s:'anagram'), (t="nagaram") ===> output: true,
// Input : (s= "rat"), (t="car"); ----> output: false



function anagram (str1, str2) {
    if (str1.length !== str2.length) return false;
    let x = str1.split("").sort();
    let y = str2.split("").sort();
    for (let i = 0; i < x.length; i++) {
        if (x[i] !== y[i]) {
            return false;
        }
    }
    return true;
}

console.log(anagram('anagram', 'nagaram'))

function anagramObj (str1, str2) {
    if (str1.length !== str2.length) return false;
    let obj1 = {};
    let obj2 = {};
    for (let i = 0; i < str1.length; i++) {
        obj1[str1[i]] = (obj1[str1[i]] || 0) + 1;
        obj2[str2[i]] = (obj1[str2[i]] || 0) + 1;
    }
    for (const key in obj1) {
        if (obj1[key] !== obj2[key])
            return false
    }
    return true;
}

console.log(anagramObj('anagram', 'nagaram'))



function twoSum (nums, target) {
    let obj = {}
    for (let i = 0; i < nums.length; i++) {
        let n = nums[i]
        if (obj[target - n] >= 0) {
            return [obj[target - n],i]
        } else {
            obj[nums[i]] = i;
        }
    }
}

console.log(twoSum([2, 7, 11, 15], 30))


