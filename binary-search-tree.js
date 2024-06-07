class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    const newNode = new Node(val);
    
    if (this.root === null) {
      this.root = newNode;
      return this;
    } else {
      let currentNode = this.root;
      
      while (true) {
        if (val < currentNode.val) {
          if (currentNode.left === null) {
            currentNode.left = newNode;
            return this;
          }
          currentNode = currentNode.left;
        } else if (val > currentNode.val) {
          if (currentNode.right === null) {
            currentNode.right = newNode;
            return this;
          }
          currentNode = currentNode.right;
        } else {
          return this;
        }
      }
    }
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val) {
    const newNode = new Node(val);
    
    const _insert = (node) => {
      if (node === null) {
        return newNode;
      } else if (val < node.val) {
        node.left = _insert(node.left);
      } else if (val > node.val) {
        node.right = _insert(node.right);
      }
      return node;
    }
    
    this.root = _insert(this.root);
    return this;
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let currentNode = this.root;
    while (currentNode) {
      if (currentNode.val === val) return currentNode;
      
      if (currentNode.val > val) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val) {
    const _find = (currentNode) => {
      if (currentNode === null) {
        return undefined;
      } else if (val < currentNode.val) {
        return _find(currentNode.left);
      } else if (val > currentNode.val) {
        return _find(currentNode.right);
      } else {
        return currentNode;
      }
    }
    return _find(this.root);
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    const nodeArr = [];
    
    const _pushNode = (node) => {
      nodeArr.push(node.val);
      if (node.left) _pushNode(node.left);
      if (node.right) _pushNode(node.right);
    }
    
    _pushNode(this.root);
    
    return nodeArr;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    const nodeArr = [];
    
    const _pushNode = (node) => {
      if (node.left) _pushNode(node.left);
      nodeArr.push(node.val);
      if (node.right) _pushNode(node.right);
    }
    
    _pushNode(this.root);
    
    return nodeArr;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    const nodeArr = [];
    
    const _pushNode = (node) => {
      if (node.left) _pushNode(node.left);
      if (node.right) _pushNode(node.right);
      nodeArr.push(node.val);
    }
    
    _pushNode(this.root);
    
    return nodeArr;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    if (!this.root) return null;
    
    const queue = [this.root];
    const nodeArr = [];
    
    while (queue.length) {
      const currentNode = queue.shift();
      nodeArr.push(currentNode.val);
      
      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }
    return nodeArr;
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {
    
  }
}

module.exports = BinarySearchTree;
