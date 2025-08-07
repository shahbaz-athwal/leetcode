// Created by shahbaz_athwal at 2025/08/05 20:05
// leetgo: 1.4.15
// https://leetcode.com/problems/maximum-depth-of-binary-tree/

/*
104. Maximum Depth of Binary Tree (Easy)
Given the `root` of a binary tree, return its maximum depth.

A binary tree's **maximum depth** is the number of nodes along the longest path from the root node
down to the farthest leaf node.

**Example 1:**

![](https://assets.leetcode.com/uploads/2020/11/26/tmp-tree.jpg)

```
Input: root = [3,9,20,null,null,15,7]
Output: 3
```

**Example 2:**

```
Input: root = [1,null,2]
Output: 2
```

**Constraints:**

- The number of nodes in the tree is in the range `[0, 10⁴]`.
- `-100 <= Node.val <= 100`

*/
// -------------------------
class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
} // ------------------------

function maxDepthDFS(root: TreeNode | null): number {
  if (root === null) return 0;
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
}

function maxDepthIterDFS(root: TreeNode | null): number {
  if (root === null) return 0;
  const stack: [TreeNode, number][] = [[root, 1]];
  let max = 0;

  while (stack.length > 0) {
    const [curr, depth] = stack.pop()!;
    max = Math.max(depth, max);

    if (curr.left) stack.push([curr.left, depth + 1]);
    if (curr.right) stack.push([curr.right, depth + 1]);
  }
  return max;
}
// @lc code=begin

function maxDepth(root: TreeNode | null): number {
  if (root === null) return 0;
  const q: TreeNode[] = [root];
  let levels = 0;

  while (q.length > 0) {
    const size = q.length;
    for (let i = 0; i < size; i++) {
      const curr = q.shift()!;
      if (curr.left) q.push(curr.left);
      if (curr.right) q.push(curr.right);
    }
    levels++;
  }
  return levels;
}

// @lc code=end
