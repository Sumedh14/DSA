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

        const newNode = new BST(node.key);
        newNode.right = this.invertTree(node.left);
        newNode.left = this.invertTree(node.right);
        return newNode;
    }

    // Maximum depth of tree DFS RECURSIVE 

    depthOftreeDFSr (node = this.root) {
        if (node === null) {
            return 0;
        }
        return 1 + Math.max(this.depthOftreeDFSr(node.left), this.depthOftreeDFSr(node.right));
    }

    // DFS itterative
    depthOftreeDFSI () {
        let stack = [[this.root, 1]];
        let depth = 0;
        while (stack.length > 0) {
            let current = stack.pop();
            let node = current[0];
            let res = current[1];

            if (node !== null) {
                depth = Math.max(res, depth);
                stack.push([node.left, res + 1]);
                stack.push([node.right, res + 1]);
            }
        }
        return depth;
    }


    // bfs 
    depthOftreeBFSi (node = this.root) {
        let queue = [node];
        while (queue.length > 0) {
            const curr = queue.shift();
            console.log(curr.key);
            if (curr.left !== null) {
                queue.push(curr.left);
            }
            if (curr.right !== null) {
                queue.push(curr.right);
            }
        }
        return node;
    }

    // bfs 
    depthOftreeBFSI () {
        let stack = [];
        if (this.root === null) {
            return 0;
        }
        if (this.root !== null) {
            stack.push(this.root);
        }
        let level = 0;
        while (stack.length > 0) {
            let size = stack.length;

            for (let i = 0; i < size; i++) {
                let node = stack.shift();
                if (node.left !== null) {
                    stack.push(node.left);
                }
                if (node.right !== null) {
                    stack.push(node.right);
                }
            }
            level++;
        }
        return level;
    }


    //level order 
    levelOrder(node = this.root) {
        let res = []
        if (!node) return res;

        const q = new Queue();
        q.push(node);
        while (!q.isEmpty()) {
            let level = [];
            for (let i = q.size(); i > 0; i--) {
                let node1 = q.pop();
                if (node1 !== null) {
                    level.push(node1.val);
                    q.push(node1.left);
                    q.push(node1.right);
                }
            }
            if (level.length > 0) {
                res.push(level);
            }
        }
        return res;
    }

    zigzagLevelOrderTraversal(node = this.root) {
        const res = [];
        if (!node) return res;
        let stack = [];
        let next = [];
        let leftToRight = true;

        stack.push(node);
        while (stack.length > 0) {
            let size = stack.length;
            while (size-- > 0) {
                let curr = stack.pop();
                res.push(curr.val);

                if (leftToRight) {
                    if (curr.left) next.push(curr.left);
                    if (curr.right) next.push(curr.right);
                } else {
                    if (curr.right) next.push(curr.right);
                    if (curr.left) next.push(curr.left);
                }
            }
            leftToRight = !leftToRight;
            [stack, next] = [next, stack];
        }
        return res;
    }

    // Hight of Tree

    hightofTree (node = this.root) {
        let lefthight = 0;
        let rightHight = 0;
        let height = 0;

        if (node === null) {
            return 0;
        }

        lefthight = this.hightofTree(node.left);
        rightHight = this.hightofTree(node.right);

        if (lefthight > rightHight) {
            height = lefthight + 1;
        } else {
            height = rightHight + 1;
        }
        return height;
    }

    // Diameter of Binary Tree

    diameterOfTree (node = this.root) {
        if (!node) return 0;
        let res = 0;

        const dfs = (node) => {
            if (!node) return 0;

            let left = dfs(node.left);
            let right = dfs(node.right);
            res = Math.max(res, left + right);
            return 1 + Math.max(left, right);
        }

        dfs(node);
        return res;
    }

    // Print nodes at k distance from root

    printNodeAtKDistance (node = this.root, k) {
        const result = [];
        const nodeK = (node, k) => {
            if (node === null) return;
            if (k === 0) {
                result.push(node.key);
            }
            else {
                nodeK(node.left, k - 1);
                nodeK(node.right, k - 1);
            }
        }
        return result;
    }

    // size of binary tree

    siteOfTree (node = this.root) {
        const count = 0;
        const size = (node) => {
            if (node === null) return 0;
            return 1 + size(node.left) + size(node.left);
        }
        count = size(node);
        return count;
    }

    // Balance binary tree

    balanceBinaryTree (node = this.root) {
        if (node === null) return 0;
        let left = this.balanceBinaryTree(node.left);
        if (left === -1) return -1;
        let right = this.balanceBinaryTree(node.right);
        if (right === -1) return -1;

        if (Math.abs(left - right) > 1) {
            return -1;
        } else {
            return 1 + Math.max(left, right);
        }
    }

    // Same tree

    isSameTree(node1,node2){
        if(!node1 && !node2){
            return true;
        }
        if(node1 && node2 && node1.val === node2.val){
            return(this.isSameTree(node1.left,node2.left)&&this.isSameTree(node1.right&& node2.right));
        }else{
            return false;
        }
    }


    // Subtree

    isSubtree(root, subRoot) {
        if( !root ) return false;
        if(!subRoot) return true;

        if(this.isSameTree(root,subRoot)){
            return true;
        }
        return(
            this.isSubtree(root.left,subRoot) ||
            this.isSubtree(root.right,subRoot)
        );
    }


    // Maximum in binary tree

    maximumInBinaryTree (node = this.root) {
        let max = 0;

        const maxNum = (node) => {
            if (node === null) return -1;
            else {
                let res = Math.max(maxNum(node.left), maxNum(node.right));
                return Math.max(node.key, res);
            }
        }

        max = maxNum(node);
        return max;
    }

    // left view of tree

    leftViewR (node = this.root) {
        let maxVal = 0
        let l = 1;
        const left = (node, l) => {
            if (node === null) return;
            if (maxVal > l) {
                console.log(node.key);
            }
            left(node.left, l + 1);
            left(node.right, l + 1);
        }

    }

    leftViewI (node = this.root) {
        if (node === null) return;
        let queue = [node];
        while (queue.length > 0) {
            let size = queue.length;

            for (let i = 0; i < size; i++) {
                let curr = queue.shift;
                if (i === 0) {
                    console.log(curr.key);
                }
                if (curr.left !== null) {
                    queue.push(curr.left);
                }
                if (curr.right !== null) {
                    queue.push(curr.right);
                }
            }
        }
    }

    // children sum property of tree

    childrenSum (node = this.root) {
        if (node === null) return true;
        if (node.left === null && node.right === null) return true;
        let sum = 0;
        if (node.left !== null) { sum += node.left.key; }
        if (node.right !== null) { sum += node.right.key; }

        return (node.key === sum && this.childrenSum(node.left) && this.childrenSum(node.right));
    }

    // Maximum width of binary tree

    maximumWidthOfTree (node = this.root) {
        if (node === null) return 0;
        let max = 0;
        let queue = [node];
        while (queue.length > 0) {
            let size = queue.length;
            max = Math.max(max, size);
            for (let i = 0; i < size; i++) {
                const curr = queue.shift();
                if (curr.left !== null) queue.push(curr.left);
                if (curr.right !== null) queue.push(curr.right);
            }
        }
        return max;
    }

    // Binary to doubly link list
    binaryToDLL (node = this.root) {
        let prev = null;
        const dLL = (node) => {
            if (node === null) { return node; }
            let head = dLL(node.left);
            if (prev === null) { head = node }
            else {
                node.left = prev;
                prev.right = node;
            }
            prev = node;
            dLL(node.right);
            return node;
        }
        const list = dLL(node);
        return list;
    }

    // Spiral Traversal

    spiralTraversal (node = this.root) {
        if (node === null) return node;
        let queue = [node];
        let stack = [];
        let shift = false;
        while (queue.length > 0) {
            let size = queue.length;
            for (let i = 0; i < size; i++) {
                let curr = queue.shift();
                if (shift) {
                    stack.push(curr);
                } else {
                    console.log(curr.key);
                }
                if (curr.left !== null) { queue.push(curr.left) }
                if (curr.right !== null) { queue.push(curr.right) }
            }
            if (shift) {
                while (stack.length === 0) {
                    console.log(curr.key);
                    stack.pop();
                }
            }
            shift = !shift;
        }
    }

    // Lowest common Ancestor(LCA)

    lowestCommonAncestor (node = this.root, num1, num2) {
        if (node === null) return null;
        if (node.key == num1 || node.key == num2) return node;
        let lca1 = lowestCommonAncestor(node.left, num1, num2);
        let lca2 = lowestCommonAncestor(node.right, num1, num2);
        if (lca1 !== null && lca2 !== null) return node;
        if (lca1 !== null) {
            return lca1;
        } else {
            return lca2;
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

const tree = new BST()

tree.insert(20);
tree.insert(10);
tree.insert(15);
tree.insert(30);
tree.insert(40);
tree.insert(35);
tree.insert(18);


// tree.print();

const valuer = tree.depthOftreeDFSr();
const valuei = tree.depthOftreeDFSI();
const valueb = tree.depthOftreeBFSI();
// tree.invertingTree();

const height = tree.hightofTree();
const valueD = tree.diameterOfTree();

const list = tree.binaryToDLL();
const  zigzagLevelOrderTraversal = tree.zigzagLevelOrderTraversal();

console.log(list);
console.log(valueb);
console.log(valuer);
console.log(valuei);
console.log(height);
console.log(valueD);
console.log(zigzagLevelOrderTraversal);
