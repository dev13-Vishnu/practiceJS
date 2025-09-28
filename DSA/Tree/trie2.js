class TrieNode{
    constructor() {
        this.children = {};
        this.isEndOfWord = false;
    }
}
class Trie{
    constructor() {
        this.root  = new TrieNode();
    }
    insert(word) {
        let node = this.root;
        for(let char of word) {
            if(!node.children[char ]){
                node.children[char] = new TrieNode();
            }
            node = node.children[char];
        }
        node.isEndOfWord = true;
    }
    search(word) {
        let node = this.root ;
        for(let char of word) {
            if(!node.children[char]) {
                return false;
            }
            node = node.children[char]
        }
        return node.isEndOfWord;
    }
    startsWith(prefix) {
        let node = this.root;
        for(let char of prefix) {
            if(!node.children[char]) {
                return false;
            }
            node = node.children[char]
        }
        return true;
    }
    delete(word) {

        const deleteRecursively = (node, word, index) => {
            if (index === word.length) {
                if(!node.isEndOfWord) return false;
                node.isEndOfWord = false;

                return Object.keys(node.children).length === 0;
            }
            let char = word[index];
            if(!node.children[char]) return false;
        
            let shouldDeleteChild = deleteRecursively(node.children[char], word, index + 1);

            if(shouldDeleteChild) {
                delete node.children[char];
                return Object.keys(node.children).length === 0 && !node.isEndOfWord;
            }
            return false;
        };
        deleteRecursively(this.root, word, 0);
    }
}


// Example usage
let trie = new Trie();
trie.insert("apple");
trie.insert("app");
console.log(trie.search("apple")); // true
console.log(trie.search("app"));   // true

trie.delete("apple");
console.log(trie.search("apple")); // false
console.log(trie.search("app"));   // true (still there)

trie.delete("app");
console.log(trie.search("app"));   // false