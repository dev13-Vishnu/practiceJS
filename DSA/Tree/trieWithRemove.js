class TrieNode {
    constructor() {
        this.children = {},
        this.isEndOfWord = false
    }
}

class Trie{
    constructor() {
        this.root = new TrieNode();
    }
    insert(word) {
        let node = this.root;
        for(let char of word) {
            if(!node.children[char]) {
                node.children[char] = new TrieNode();
            }
            node= node.children[char]
        }
        node.isEndOfWord = true;
    }
    search(word) {
        let node = this.root;
        for (let char of word) {
            if(!node.children[char]) return false;
            node = node.children[char];
        }
        return node.isEndOfWord;
    }
    startsWith (prefix) {
        let node = this.root;
        for(let char of prefix) {
            if(!node.children[char])  return false
            node = node.children[char];
        }
        return true
    }
    remove(word) {
        this._remove(this.root, word, 0);
      }
    
      _remove(node, word, index) {
        if (index === word.length) {
          // Reached end of word
          if (!node.endOfWord) return false; // Word doesn't exist
          node.endOfWord = false;
    
          // If no children, this node can be deleted
          return Object.keys(node.children).length === 0;
        }
    
        const char = word[index];
        const child = node.children[char];
        if (!child) return false; // Word doesn't exist
    
        const shouldDeleteChild = this._remove(child, word, index + 1);
    
        if (shouldDeleteChild) {
          delete node.children[char];
          return (
            !node.endOfWord && Object.keys(node.children).length === 0
          );
        }
    
        return false;
      }

}

