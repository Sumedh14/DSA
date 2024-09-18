const uniqueId = (() => {
    function* idGenerator () {
        let id = Date.now();
        while (true) {
            yield id++;
        }
    }

    const gene = idGenerator();
    return () => gene.next().value;
})()

class Tree {
    #children = new Map();
    #parent = null;
    #id = uniqueId();
    #name;

    constructor (name) {
        if (!name || typeof name !== 'string' || !name.trim().length)
            throw new Error('Name must be a string');
        this.#name = name;
    }

    get name () {
        return this.#name;
    }

    set name (newName) {
        if (!newName || typeof newName !== 'string' || !newName.trim().length) {
            throw new Error('name must be an non-empty string');
        }
        this.#name = newName;
    }

    get idOfNode () {
        return this.#id;
    }

    get parentNode () {
        return this.#parent;
    }

    set parentNode (newParent) {
        if (newParent !== this.parentNode && (newParent === null || newParent instanceof Tree)) {
            this.#parent = newParent;
        }
    }

    get childrenNode () {
        return Array.from(this.#children.values());
    }

    get childrenNodeCount () {
        return this.#children.size;
    }

    hasChildNode (nameOrId) {
        if (nameOrId instanceof Tree) {
            return this.#children.has(nameOrId.idOfNode);
        }

        for (let child of this.childrenNode) {
            if (child.name === nameOrId || this.idOfNode === nameOrId) {
                return true;
            }
        }
        return false;
    }

    getChildNode (nameOrId) {
        for (let child of this.childrenNode) {
            if (child.name === nameOrId || this.idOfNode === nameOrId) {
                return child;
            }
        }
        return null;
    }

    createChildNode (name) {
        const newNode = new Tree(name);
        this.#children.set(newNode.idOfNode, newNode);
        newNode.parentNode = this;
        return newNode;
    }

    removeNode (nameOrId) {
        if (!this.hasChildNode(nameOrId)) return;
        let removedNode = null;
        if (nameOrId instanceof Tree) {
            this.#children.delete(nameOrId.idOfNode);
            removedNode = nameOrId;
        } else {
            for (let child of this.childrenNode) {
                if (child.name === nameOrId || child.idOfNode === nameOrId) {
                    this.#children.delete(child.idOfNode);
                    removedNode = child;
                    break;
                }
            }
        }
        if (removedNode) {
            removedNode.parentNode = null;
        }

    }

    appendChildNode (node) {
        if (!(node instanceof Tree) || this.hasChildNode(node)) return;
        if (node === this) throw new Error('Node cannot contain itself');

        let parentNode = this.parentNode;
        while (parentNode !== null) {
            if (parentNode == node) throw new Error('Node cannot contain its ansistor');
            parentNode = parentNode.parentNode;
        }
        this.#children.set(node.idOfNode, node);
        this.parentNode = this;
    }

    traversal (cb) {
        for (let child of this.childrenNode) {
            if (cb(child) === true || child.traversal(cb) === true) {
                return true;
            }
        }
    }

    findNodeByName (name) {
        let nodeFound = null;
        this.traversal((node) => {
            if (node.name === name) {
                nodeFound = node;
                return true;
            }
        });
        return nodeFound;
    }

    findAllNodeByName (name) {
        let nodeFound = [];
        this.traversal((node) => {
            if (node.name === name) {
                nodeFound.push(node);
                return true;
            }
        });
        return nodeFound;
    }

    #getTree (node, spaceCode = 0) {
        let str = '\n';
        node.childrenNode.forEach((child) => {
            str += `${" ".repeat(spaceCode)}${child.name}${this.#getTree(child, spaceCode + 2)}`
        });
        return str;
    }

    print () {
        console.log(`\n${this.name}${this.#getTree(this, 2)}`)
    }
}

const tree = new Tree('root');

const pre = tree.createChildNode('pre')

tree.createChildNode('one')
    .createChildNode('twos');

tree.removeNode("one")
console.log(tree.hasChildNode("one").parentNode)
console.log(tree.print());