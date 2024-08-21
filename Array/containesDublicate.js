/**
 Contains Duplicate
 Easy
 */

function containsDublicate (arr) {
    let hashSet = new Set();
    for (const num of arr) {
        if (hashSet.has(num)) { 
            return true; 
        }
        else {
            hashSet.add(num);
        }
    }
    return false;
}

const value = containsDublicate([1, 2, 3, 3])

console.log(value);


/*

function containdDublicate(arr){
    let hashSet = new Set();
    for(const num of arr){
        if(hashSet.has(num)) return true;
    }
    return false;
}

*/