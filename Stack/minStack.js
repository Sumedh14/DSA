/*

Design a stack class that supports the push, pop, top, and getMin operations.

MinStack() initializes the stack object.
void push(int val) pushes the element val onto the stack.
void pop() removes the element on the top of the stack.
int top() gets the top element of the stack.
int getMin() retrieves the minimum element in the stack.
Each function should run in O(1) time.\\\


Input: ["MinStack", "push", 1, "push", 2, "push", 0, "getMin", "pop", "top", "getMin"]

Output: [null,null,null,null,0,null,2,1]

Explanation:
MinStack minStack = new MinStack();
minStack.push(1);
minStack.push(2);
minStack.push(0);
minStack.getMin(); // return 0
minStack.pop();
minStack.top();    // return 2
minStack.getMin(); // return 1

 */


class MinStack {
    constructor () {
        minimum = [];
        stack = [];
    }

    push (value) {
        this.stack.push(value);
        value = Math.min(value, this.minimum.length === 0 ? value : this.minimum[this.minimum.length - 1]);
        this.minimum.push(value);
    }

    pop () {
        if (this.stack.length && this.minimum.length) {
            this.stack.pop();
            this.minimum.pop();
        }
    }

    top () {
        return this.stack[this.stack.length - 1];
    }

    getMin () {
        return this.minimum[this.minimum.length - 1];
    }
}