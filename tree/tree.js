const uniqueId = (() => {
    function* idGenerator () {
        let id = Date.now();
        while (true) {
            yield id++;
        }
    }

    const gene = idGenerator();
    return function () {
        return gene.next().value;
    }
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
        } else {
            for (let child of this.#children) {
                if (child.name === nameOrId || child.idOfNode === nameOrId) {
                    this.#children.delete(nameOrId.idOfNode);
                    removedNode = child;
                    break;
                }
            }
        }
        if (removedNode) {
            removedNode.parentNode = null;
        }

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

tree.removeNode('one')
console.log(tree.print());