// Created by shahbaz_athwal at 2025/08/11 04:08
// leetgo: 1.4.15
// https://leetcode.com/problems/serialize-and-deserialize-binary-tree/

/*
297. Serialize and Deserialize Binary Tree (Hard)
Serialization is the process of converting a data structure or object into a sequence of bits so
that it can be stored in a file or memory buffer, or transmitted across a network connection link to
be reconstructed later in the same or another computer environment.

Design an algorithm to serialize and deserialize a binary tree. There is no restriction on how your
serialization/deserialization algorithm should work. You just need to ensure that a binary tree can
be serialized to a string and this string can be deserialized to the original tree structure.

**Clarification:** The input/output format is the same as [how LeetCode serializes a binary
tree](https://support.leetcode.com/hc/en-us/articles/32442719377939-How-to-create-test-cases-on-
LeetCode#h_01J5EGREAW3NAEJ14XC07GRW1A). You do not necessarily need to follow this format, so please
be creative and come up with different approaches yourself.

**Example 1:**

![](https://assets.leetcode.com/uploads/2020/09/15/serdeser.jpg)

```
Input: root = [1,2,3,null,null,4,5]
Output: [1,2,3,null,null,4,5]
```

**Example 2:**

```
Input: root = []
Output: []
```

**Constraints:**

- The number of nodes in the tree is in the range `[0, 10⁴]`.
- `-1000 <= Node.val <= 1000`

*/

// Definition for a binary tree node
class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

// @lc code=begin

/*
 * Encodes a tree to a single string.
 */
function serialize(root: TreeNode | null): string {
  function helper(root: TreeNode | null): (number | "#")[] {
    if (root === null) return ["#"];
    return [root.val, ...helper(root.left), ...helper(root.right)];
  }
  return helper(root).toString();
}

/*
 * Decodes your encoded data to tree.
 */
function deserialize(data: string): TreeNode | null {
  const arr = data.split(",");
  let i = 0;

  function dfs() {
    if (arr[i++] === "#") return null;
    const curr = new TreeNode(Number(arr[i - 1]));
    curr.left = dfs();
    curr.right = dfs();

    return curr;
  }
  return dfs();
}

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

// @lc code=end
