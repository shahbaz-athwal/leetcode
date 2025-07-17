// Created by shahbaz_athwal at 2025/07/16 20:26
// leetgo: 1.4.15
// https://leetcode.com/problems/maximum-product-subarray/

/*
152. Maximum Product Subarray (Medium)
Given an integer array `nums`, find a subarray that has the largest product, and return the product.

The test cases are generated so that the answer will fit in a **32-bit** integer.

**Example 1:**

```                 |
Input: nums = [2,3,-2,4,5,-2,0]
Output: 6
Explanation: [2,3] has the largest product 6.
```

**Example 2:**

```
Input: nums = [-2,0,-1]
Output: 0
Explanation: The result cannot be 2, because [-2,-1] is not a subarray.
```

**Constraints:**

- `1 <= nums.length <= 2 * 10⁴`
- `-10 <= n <= 10`
- The product of any subarray of `nums` is **guaranteed** to fit in a **32-bit** integer.

*/

// @lc code=begin

function maxProduct(nums: number[]): number {
  let max = Math.max(...nums),
    currentMax = 1,
    currentMin = 1;

  for (const n of nums) {
    if (n === 0) {
      currentMax = 1;
      currentMin = 1;
      continue;
    }
    const freezeMax = currentMax * n;
    const freezeMin = currentMin * n;
    currentMax = Math.max(freezeMax, freezeMin, n);
    currentMin = Math.min(freezeMax, freezeMin, n);
    max = Math.max(currentMax, max);
  }
  return max;
}

// @lc code=end
