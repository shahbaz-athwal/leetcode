// Created by shahbaz_athwal at 2025/08/15 00:09
// leetgo: 1.4.15
// https://leetcode.com/problems/design-add-and-search-words-data-structure/

/*
211. Design Add and Search Words Data Structure (Medium)
Design a data structure that supports adding new words and finding if a string matches any
previously added string.

Implement the `WordDictionary` class:

- `WordDictionary()` Initializes the object.
- `void addWord(word)` Adds `word` to the data structure, it can be matched later.
- `bool search(word)` Returns `true` if there is any string in the data structure that matches `word`
or `false` otherwise. `word` may contain dots `'.'` where dots can be matched with any letter.

**Example:**

```
Input
["WordDictionary","addWord","addWord","addWord","search","search","search","search"]
[[],["bad"],["dad"],["mad"],["pad"],["bad"],[".ad"],["b.."]]
Output
[null,null,null,null,false,true,true,true]

Explanation
WordDictionary wordDictionary = new WordDictionary();
wordDictionary.addWord("bad");
wordDictionary.addWord("dad");
wordDictionary.addWord("mad");
wordDictionary.search("pad"); // return False
wordDictionary.search("bad"); // return True
wordDictionary.search(".ad"); // return True
wordDictionary.search("b.."); // return True
```

**Constraints:**

- `1 <= word.length <= 25`
- `word` in `addWord` consists of lowercase English letters.
- `word` in `search` consist of `'.'` or lowercase English letters.
- There will be at most `2` dots in `word` for `search` queries.
- At most `10⁴` calls will be made to `addWord` and `search`.

*/

// @lc code=begin
class TrieNode {
  children: Map<string, TrieNode>;
  isEnd: boolean;
  constructor() {
    this.children = new Map();
    this.isEnd = false;
  }
}

class WordDictionary {
  root: TrieNode;
  constructor() {
    this.root = new TrieNode();
  }

  addWord(word: string): void {
    let curr = this.root;
    for (const c of word) {
      if (!curr.children.has(c)) {
        curr.children.set(c, new TrieNode());
      }
      curr = curr.children.get(c)!;
    }
    curr.isEnd = true;
  }

  search(word: string): boolean {
    function dfs(startIdx: number, root: TrieNode) {
      for (let i = startIdx; i < word.length; i++) {
        const c = word[i];
        if (c === ".") {
          for (const node of root.children.values()) {
            if (dfs(i + 1, node)) return true;
          }
          return false;
        } else {
          if (!root.children.has(c)) return false;
          root = root.children.get(c)!;
        }
      }
      return root.isEnd;
    }

    return dfs(0, this.root);
  }
}

// @lc code=end
