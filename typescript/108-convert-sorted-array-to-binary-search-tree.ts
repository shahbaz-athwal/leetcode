// Created by shahbaz_athwal at 2025/08/08 21:27
// leetgo: 1.4.15
// https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/

/*
108. Convert Sorted Array to Binary Search Tree (Easy)
Given an integer array `nums` where the elements are sorted in **ascending order**, convert it to a
**height-balanced**binary search tree.

**Example 1:**

![](https://assets.leetcode.com/uploads/2021/02/18/btree1.jpg)

```
Input: nums = [-10,-3,0,5,9]
Output: [0,-3,9,-10,null,5]
Explanation: [0,-10,5,null,-3,null,9] is also accepted:
```

**Example 2:**

![](https://assets.leetcode.com/uploads/2021/02/18/btree.jpg)

```
Input: nums = [1,3]
Output: [3,1]
Explanation: [1,null,3] and [3,1] are both height-balanced BSTs.
```

**Constraints:**

- `1 <= nums.length <= 10⁴`
- `-10⁴ <= nums[i] <= 10⁴`
- `nums` is sorted in a **strictly increasing** order.

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

function sortedArrayToBST(nums: number[]): TreeNode | null {
  function subTree(l: number, r: number) {
    if (l > r) return null;
    const mid = Math.floor((l + r) / 2);
    const node = new TreeNode(nums[mid]);
    node.left = subTree(l, mid - 1);
    node.right = subTree(mid + 1, r);
    return node;
  }

  return subTree(0, nums.length - 1);
}

// @lc code=end
