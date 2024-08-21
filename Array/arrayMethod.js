const arr = new Array(5).fill(0)
const arr2D = new Array(3).fill().map(() => new Array(3).fill(0));


/*
The arrays are objects, so we can try to use delete

let arr = ["I", "go", "home"];

delete arr[1]; // remove "go"

alert( arr[1] ); // undefined

// now arr = ["I",  , "home"];
alert( arr.length ); // 3
*/

// Splice
let arrSplice = ["I", "go", "home"]; // arr.splice(start[, deleteCount, elem1, ..., elemN])
let removed = arrSplice.splice(1, 1); // from index 1 remove 1 element
console.log(arr); // ["I", "JavaScript"]
console.log(removed); // ["go"]  splice returns the array of removed elements

let arrSplice2 = ["I", "study", "JavaScript"];
arr.splice(2, 0, "complex", "language");
// from index 2
// delete 0
// then insert "complex" and "language"
console.log(arr) // ["I", "study", "complex", "language", "JavaScript"]

let arrSplice3 = [1, 2, 5];
// from index -1 (one step from the end)
// delete 0 elements,
// then insert 3 and 4
arr.splice(-1, 0, 3, 4);
console.log(arr) // 1,2,3,4,5



// Slice 
let arrSlice = ["t", "e", "s", "t"];
// arrSlice.slice([start], [end]);
alert(arrSlice.slice(1, 3)); // e,s (copy from 1 to 3)
alert(arrSlice.slice(-2)); // s,t (copy from -2 till the end)

/*
forEach:
["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
  alert(`${item} is at index ${index} in ${array}`);
});
*/


/*
Index, includes:
arr.indexOf(item, from) – looks for item starting from index from, and returns the index where it was found, otherwise -1.
arr.includes(item, from) – looks for item starting from index from, returns true if found.

const arr = [NaN];
alert( arr.indexOf(NaN) ); // -1 (wrong, should be 0)
alert( arr.includes(NaN) );// true (correct)

includes is that it correctly handles NaN, unlike indexOf:
 */

/*
find and findIndex/findLastIndex

The find method looks for a single (first) element that makes the function return true
let result = arr.find(function(item, index, array) {
  // if true is returned, item is returned and iteration is stopped
  // for falsy scenario returns undefined
});

let users = [
  {id: 1, name: "John"},
  {id: 2, name: "Pete"},
  {id: 3, name: "Mary"}
];
let user = users.find(item => item.id == 1);
alert(user.name); // John
*/

/*
filter:
 filter returns an array of all matching elements

 let users = [
  {id: 1, name: "John"},
  {id: 2, name: "Pete"},
  {id: 3, name: "Mary"}
];
// returns array of the first two users
let someUsers = users.filter(item => item.id < 3);
alert(someUsers.length); // 2
*/


/*
It calls the function for each element of the array and returns the array of results.
let result = arr.map(function(item, index, array) {
  // returns the new value instead of item
});

let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
alert(lengths); // 5,7,6
*/

/*
sort(fn)
The call to arr.sort() sorts the array in place, changing its element order.
let arr = [ 1, 2, 15 ];
// the method reorders the content of arr
arr.sort();
alert( arr );

function compare(a, b) {
  if (a > b) return 1; // if the first value is greater than the second
  if (a == b) return 0; // if values are equal
  if (a < b) return -1; // if the first value is less than the second
}

***Use "localeCompare" for strings: It compares letters by their codes by default.
let countries = ['Österreich', 'Andorra', 'Vietnam'];
alert( countries.sort( (a, b) => a > b ? 1 : -1) ); // Andorra, Vietnam, Österreich (wrong)
alert( countries.sort( (a, b) => a.localeCompare(b) ) ); // Andorra,Österreich,Vietnam (correct!)
*/

/*

thisArg:
Almost all array methods that call functions – like find, filter, map, with a notable exception of sort, accept an optional additional parameter thisArg.

arr.find(func, thisArg);
arr.filter(func, thisArg);
arr.map(func, thisArg);

let army = {
  minAge: 18,
  maxAge: 27,
  canJoin(user) {
    return user.age >= this.minAge && user.age < this.maxAge;
  }
};
let users = [
  {age: 16},
  {age: 20},
  {age: 23},
  {age: 30}
];
// find users, for who army.canJoin returns true
let soldiers = users.filter(army.canJoin, army);
alert(soldiers.length); // 2
alert(soldiers[0].age); // 20
alert(soldiers[1].age); // 23

*/


/*
reduce/reduceRight
let value = arr.reduce(function(accumulator, item, index, array) {
  // ...
}, [initial]);

let arr = [1, 2, 3, 4, 5];

let result = arr.reduce((sum, current) => sum + current, 0);
alert(result); // 15
*/
