class BST {
    #root = null;
    #compare = null;

    constructor (compareFun = null) {
        if (compareFun || typeof compareFun === 'function') {
            this.#compare = compareFun;
        } else {
            this.#compare = (a, b) => {
                if (a > b) return BST.comparison.BIGGER
                if (a < b) return BST.comparison.SMALLER
                return BST.comparison.EQUAL
            }
        }
    }

    get root () {
        return this.#root;
    }

    static get comparison () {
        return Object.freeze({
            SMALLER: -1,
            SMALLER_OR_EQUAL: [-1, 0],
            BIGGER: 1,
            BIGGER_OR_EQUAL: [1, 0],
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
        const newNode = this.#createNode(value);
        if (this.root === null) {
            this.#root = newNode;
        }
        else {
            this.#insertNode(newNode);
        }
    }

    #insertNode (newNode, currentNode = this.root) {
        if (BST.comparison.SMALLER === this.#compare(newNode.key, currentNode.key)) {
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

    invertTree (node = this.root) {
        if (node === null) return null;

        console.log(node.key);
        const newNode = new BST().insert(node.key);
        console.log(node.left);
        newNode.right = this.invertTree(node.left);
        newNode.left = this.invertTree(node.right);
        return newNode;
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

const tree = new BST()

tree.insert(20);
tree.insert(10);
tree.insert(15);
tree.insert(30);
tree.insert(40);
tree.insert(35);
tree.insert(18);


tree.print();

tree.invertTree();

tree.print()

