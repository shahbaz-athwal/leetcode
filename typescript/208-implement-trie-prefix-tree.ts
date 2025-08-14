// Created by shahbaz_athwal at 2025/08/14 03:43
// leetgo: 1.4.15
// https://leetcode.com/problems/implement-trie-prefix-tree/

/*
208. Implement Trie (Prefix Tree) (Medium)
A [**trie**](https://en.wikipedia.org/wiki/Trie) (pronounced as "try") or **prefix tree** is a tree
data structure used to efficiently store and retrieve keys in a dataset of strings. There are
various applications of this data structure, such as autocomplete and spellchecker.

Implement the Trie class:

- `Trie()` Initializes the trie object.
- `void insert(String word)` Inserts the string `word` into the trie.
- `boolean search(String word)` Returns `true` if the string `word` is in the trie (i.e., was
inserted before), and `false` otherwise.
- `boolean startsWith(String prefix)` Returns `true` if there is a previously inserted string `word`
that has the prefix `prefix`, and `false` otherwise.

**Example 1:**

```
Input
["Trie", "insert", "search", "search", "startsWith", "insert", "search"]
[[], ["apple"], ["apple"], ["app"], ["app"], ["app"], ["app"]]
Output
[null, null, true, false, true, null, true]

Explanation
Trie trie = new Trie();
trie.insert("apple");
trie.search("apple");   // return True
trie.search("app");     // return False
trie.startsWith("app"); // return True
trie.insert("app");
trie.search("app");     // return True
```

**Constraints:**

- `1 <= word.length, prefix.length <= 2000`
- `word` and `prefix` consist only of lowercase English letters.
- At most `3 * 10⁴` calls **in total** will be made to `insert`, `search`, and `startsWith`.

*/
// TrieNode class for each node in the Trie

// @lc code=begin
class TrieNode {
  children: TrieNode[];
  isEnd: boolean;

  constructor() {
    this.children = new Array(26).fill(null);
    this.isEnd = false;
  }
}

class Trie {
  root: TrieNode;
  constructor() {
    this.root = new TrieNode();
  }

  insert(word: string): void {
    let curr = this.root;
    for (const c of word) {
      const i = c.charCodeAt(0) - 97;
      if (!curr.children[i]) {
        curr.children[i] = new TrieNode();
      }
      curr = curr.children[i];
    }
    curr.isEnd = true;
  }

  search(word: string): boolean {
    let curr = this.root;
    for (const c of word) {
      const i = c.charCodeAt(0) - 97;
      if (!curr.children[i]) return false;
      curr = curr.children[i];
    }
    return curr.isEnd;
  }

  startsWith(prefix: string): boolean {
    let curr = this.root;
    for (const c of prefix) {
      const i = c.charCodeAt(0) - 97;
      if (!curr.children[i]) return false;
      curr = curr.children[i];
    }
    return true;
  }
}

// @lc code=end
