/*
1. Write a JavaScript program to sort the elements of a given stack in descending order.

  function sort_element (stack) {
    let tempStack = [];
    while (stack.length) {
        let temp = stack.pop();
        while (tempStack.length && tempStack[tempStack.length - 1] > temp) {
            stack.push(tempStack[tempStack.length - 1]);
            tempStack.pop();
        }
        tempStack.push(temp)
    }
    return tempStack;
}

console.log(sort_element([1, 4, 3, 2, 5]))
    }

 */

/*
2. Write a JavaScript program to sort the elements of a given stack in ascending order. 

function sort_element(stack){
let tempStack = [];
while(stack.length){
    let temp = stack.pop();
    while(tempStack.length && tempStack[tempStack.length-1]< temp){
        stack.push(tempStack[tempStack.length-1]);
        tempStack.pop();
    }
    tempStack.push(temp);
}
return tempStack;
}

console.log(sort_element([1, 4, 3, 2, 5]))
*/

/*
3. Write a JavaScript program to reverse the elements of a given stack.

function reverse (stack) {
    let tempStack = [];
    while (stack.length) {
        let temp = stack.pop();
        tempStack.push(temp)
    }
    return tempStack
}

console.log(reverse([1, 4, 3, 2, 5]))

 */

/*
4. Write a JavaScript program to find the maximum and minimum elements in a stack.

function maxminElements (stack) {
    let size = stack.length;
    let max = Number.MIN_SAFE_INTEGER;
    let min = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < size; i++) {
        let temp = stack.pop();
        if (temp > max) {
            max = temp;
        }
        if (temp < min) {
            min = temp;
        }
    }
    return { max, min };
}

console.log(maxminElements([1, 4, 3, 2, 0]));

 */



