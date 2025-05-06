class Node {
    constructor () {
        this.children = {};
        this.isEndOfword = false;
    }
}

class Trie {
    constructor() {
        this.root = new Node();
    }
    insert(word) {
        let node = this.root;
        for(let char of word) {
            if(!node.children[char]){
                node.children[char] = new Node();
            }
            node = node.children[char]
        }
        node.isEndOfword = true;
    }
    search(word){
        let node = this.root;
        for(let char of word) {
            if(!node.children[char]) return false;
            node = node.children[char];
        }
        return node.isEndOfword;
    }
    isPrefix(pref){
        let node = this.root;
        for(let char of pref) {
            if(!node.children[char]) return false;
            node = node.children[char];
        }
        return true;
    }
}

const trie = new Trie()

trie.insert("Hello");
console.log(trie.search("Hello"));
trie.insert("Apple");
console.log(trie.search("Apple"));
console.log(trie.isPrefix("App"));
