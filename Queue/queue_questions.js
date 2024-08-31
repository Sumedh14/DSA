/*
  Que1: Implement Stack using Queue

    implement a LIFO stack using only two queue. It should support all the functions of a stack( push, top, pop, isEmpty).


    var MyStack = function () {
    this.q1 = [];
    this.q2 = [];
}

// q1 = [2,3,4]
// q2 = []

MyStack.prototype.push = function (item) {
    while (this.q1.length !== 0) {
        this.q2.push(this.q1.shift());
    }
    this.q1.push(item);
    while (this.q2.length !== 0) {
        this.q1.push(this.q2.shift())
    }
}

MyStack.prototype.pop = function () {
    return this.q1.shift();
}

MyStack.prototype.size = function () {
    return this.q1.length;
}

MyStack.prototype.isEmpty = function () {
    return this.q1.length === 0;
}

MyStack.prototype.peek = function () {
    return this.q1[0];
}


var obj = new MyStack();

obj.push(2)
obj.push(3)
obj.push(1)
obj.push(98)
obj.push(65)
obj.pop()
obj.pop()
obj.pop()
obj.push(33)
obj.push(47)
obj.push(11)

*/

/*
Que2: Implementing Queue using two stack

var MyQueue = function () {
    this.s1 = [];
    this.s2 = [];
}

MyQueue.prototype.enqueue = function (item) {
    this.s1.push(item);
}

MyQueue.prototype.dequeue = function () {
    if (this.s2.length === 0) {
        while (this.s1.length !== 0) {
            this.s2.push(this.s1.pop());
        }
    }
    return this.s2.pop();
}

MyQueue.prototype.size = function () {
    return this.s2.length;
}

MyQueue.prototype.peek = function () {
    if (this.s2.length === 0) {
        while (this.s1.length !== 0) {
            this.s2.push(this.s1.pop());
        }
    }
    return this.s2[this.s2.length - 1];
}

MyQueue.prototype.isEmpty = function () {
    return this.s1.length === 0 && this.s2.length === 0;
}

var obj = new MyQueue();

obj.enqueue(2)
obj.enqueue(3)
obj.enqueue(1)

obj.dequeue()
obj.dequeue()
obj.dequeue()
obj.enqueue(33)
obj.peek()
obj.enqueue(47)
obj.enqueue(11)

*/

