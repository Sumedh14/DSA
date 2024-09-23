class BST {
    #root = null;
    #compare = null;

    constructor (compareFun = null) {
        if (!compareFun || typeof compareFun === 'function') {
            this.#compare = compareFun;
        } else {
            this.#compare = (a, b) => {
                if (a > b) return BST.comparison.BIGGER;
                if (a < b) return BST.comparison.SMALLER;
                return BST.comparison.EQUAL;
            }
        }
    }

    get root () {
        return this.#root;
    }

    static get comparison () {
        return Object.freeze({
            SMALLER: -1,
            SMALLER_OR_EQUAL: [1, 0],
            BIGGER: 1,
            BIGGER_OR_EQUAL: [-1, 0],
            EQUAL: 0
        });
    }

    #createNode (value) {
        return Object.seal({
            key: value,
            right: null,
            left: null
        });
    }

    insert (value) {
        let newNode = this.#createNode(value);
        if (this.root === null) {
            this.#root = newNode;
        }
        else {
            this.#insertNode(value);
        }
    }

    #insertNode (newNode, currentNode = this.root) {
        if (this.comparison.SMALLER_OR_EQUAL.include(this.#compare(newNode.key, currentNode.key))) {
            if (currentNode.left === null) {
                currentNode.left = newNode;
            } else {
                this.#insertNode(newNode, currentNode.left);
            }
        } else {
            if (currentNode.right === null) {
                currentNode.right = newNode
            } else {
                this.#insertNode(newNode, currentNode.right);
            }
        }
    }

    print () {
        this.#printNode();
    }

    traverseInorder (cb) {
        this.#inOrder(this.root, cb);
    }
    traversePreOrder (cb) {
        this.#preOrder(this.root, cb);
    }
    traversePostOrder (cb) {
        this.#postOrder(this.root, cb);
    }

    #inOrder (node, cb) {
        if (node !== null) {
            this.#inOrder(node.left, cb);
            cb(node.key);
            this.#inOrder(node.left, cb);
        }
    }

    #preOrder (node, cb) {
        if (node !== null) {
            cb(node.key);
            this.#preOrder(node.left, cb);
            this.#preOrder(node.right, cb);
        }
    }

    #postOrder (node, cb) {
        if (node !== null) {
            this.#postOrder(node.left, cb);
            this.#postOrder(node.right, cb);
            cb(node.key);
        }
    }

    search (value) {
        this.#searchTree(value);
    }

    #searchTree (value, node = this.root) {
        if (node === null) return false;
        if (this.#compare(value, node.key) === BST.comparison.EQUAL) return true;
        if (this.#compare(value, node.key) === BST.comparison.SMALLER) {
            return this.#searchTree(value, node.left);
        }
        return this.#searchTree(value, node.right);
    }

    #printNode (node = this.root, spaceCount = 0, lable = '* ') {
        if (node === null) {
            return console.log(`${' -'.repeat(spaceCount)}${lable}null`);
        } else {
            console.log(`${' -'.repeat(spaceCount)}${lable}${node.key}`);
            this.#printNode(node.left, spaceCount + 2, 'L: ');
            this.#printNode(node.right, spaceCount + 2, 'R: ');
        }
    }
}