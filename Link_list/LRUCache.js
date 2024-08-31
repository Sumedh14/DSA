/*
LRU Cache
Implement the Least Recently Used (LRU) cache class LRUCache. The class should support the following operations

LRUCache(int capacity) Initialize the LRU cache of size capacity.
int get(int key) Return the value cooresponding to the key if the key exists, otherwise return -1.
void put(int key, int value) Update the value of the key if the key exists. Otherwise, add the key-value pair to the cache. If the introduction of the new pair causes the cache to exceed its capacity, remove the least recently used key.
A key is considered used if a get or a put operation is called on it.

Ensure that get and put each run in O(1) average time complexity.

Input:
["LRUCache", [2], "put", [1, 10],  "get", [1], "put", [2, 20], "put", [3, 30], "get", [2], "get", [1]]

Output:
[null, null, 10, null, null, 20, -1]

Explanation:
LRUCache lRUCache = new LRUCache(2);
lRUCache.put(1, 10);  // cache: {1=10}
lRUCache.get(1);      // return 10
lRUCache.put(2, 20);  // cache: {1=10, 2=20}
lRUCache.put(3, 30);  // cache: {2=20, 3=30}, key=1 was evicted
lRUCache.get(2);      // returns 20 
lRUCache.get(1);      // return -1 (not found)

*/


class Node {
    constructor (key, value) {
        this.key = key;
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}


class LruCache {
    constructor (capacity) {
        this.capacity = capacity;
        this.cache = new Map();
        this.tail = new Node(0, 0);
        this.head = new Node(0, 0);
        this.head.prev = this.tail
        this.tail.next = this.prev;
    }

    get (key) {
        if (this.cache.has(key)) {
            const node = this.cache.get(key);
            this.remove(node);
            this.insert(node);
            return node.value;
        }
        return -1;
    }


 
    remove(node) {
        node.prev.next = node.next;
        node.next.prev = node.prev;
    }

    insert (node) {
        const prev = this.head.prev;
        prev.next = node;
        node.next = this.head;
        node.prev = prev;
        this.head.prev = node;
    }

    put (key, value) {
        if (this.cache.has(key)) {
            this.remove(this.cache.get(key));
        }

        const newNode = new Node(key, value);
        this.cache.set(key, newNode);
        this.insert(newNode);

        if (this.cache.size > this.capacity) {
            const LRU = this.tail.next;
            this.remove(LRU);
            this.cache.delete(LRU.key);
        }
    }
}