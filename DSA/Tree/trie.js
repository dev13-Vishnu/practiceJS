class TrieNode {
    constructor(value) {
        this.children = [];
        this.isEndOfWord = false;
    }
}

class Trie{
    constructor() {
        this.root = new TrieNode()
    }
    insert(word){
        let current = this.root;
        for(let char of word) {
            if(!current.children[char]){
                current.children[char]  = new TrieNode();
            }
            current = current.children[char];
        }
        current.isEndOfWord = true;
    }
    search(word) {
        let current = this.root;
        for(let char of word){
            if(!current.children[char]) return false
            current = current.children[char];

        }
        return current.isEndOfWord
    }
    startsWith(prefix) {
        let current = this.root;
        for (let char of prefix) {
            if(!current.children[char]) {
                return false;
            }
            current = current.children[char];
        }
        return true; 
    }
}


const newTrie = new Trie();

newTrie.insert("word");

console.log(newTrie.search("apple"));
console.log(newTrie.search("word"));

console.log(newTrie.startsWith("wo"))
console.log(newTrie.startsWith("wd"))