// Created by shahbaz_athwal at 2025/07/12 17:33
// leetgo: 1.4.14
// https://leetcode.com/problems/product-of-array-except-self/

/*
238. Product of Array Except Self (Medium)
Given an integer array `nums`, return an array `answer`such that `answer[i]`is equal to the product
of all the elements of `nums`except `nums[i]`.

The product of any prefix or suffix of `nums` is **guaranteed** to fit in a **32-bit** integer.

You must write an algorithm that runs in `O(n)` time and without using the division operation.

**Example 1:**

```
Input: nums = [1,2,3,4] [1 1 2 6] [24 12 4 1]
Output: [24,12,8,6]
```

**Example 2:**

```
Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]
```

**Constraints:**

- `2 <= nums.length <= 10⁵`
- `-30 <= nums[i] <= 30`
- The input is generated such that `answer[i]` is **guaranteed** to fit in a **32-bit** integer.

**Follow up:** Can you solve the problem in `O(1)` extra space complexity? (The output array **does
not** count as extra space for space complexity analysis.)

*/

// @lc code=begin

// o(n^2) - time
function productExceptSelf0(nums: number[]): number[] {
  const out: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    let product = 1;
    for (let j = 0; j < nums.length; j++) {
      if (i !== j) {
        product *= nums[j];
      }
    }
    out.push(product);
  }
  return out;
}

// o(n) - time, o(n) - space
function productExceptSelf1(nums: number[]): number[] {
  const n = nums.length;
  const leftProducts = new Array<number>(n);
  // Base case: No items in left of the first item
  leftProducts[0] = 1;

  for (let i = 1; i < n; i++) {
    leftProducts[i] = leftProducts[i - 1] * nums[i - 1];
  }

  const rightProducts = new Array<number>(n);
  rightProducts[n - 1] = 1;

  for (let i = n - 2; i >= 0; i--) {
    rightProducts[i] = rightProducts[i + 1] * nums[i + 1];
  }
  return leftProducts.map((val, i) => val * rightProducts[i]);
}

// o(n) - time, o(1) - space
function productExceptSelf(nums: number[]): number[] {
  const n = nums.length;
  const products = new Array<number>(n);
  products[0] = 1;

  for (let i = 1; i < n; i++) {
    products[i] = products[i - 1] * nums[i - 1];
  }

  let rightProduct = 1;

  for (let i = n - 1; i >= 0; i--) {
    products[i] *= rightProduct;
    rightProduct *= nums[i];
  }
  return products;
}

// @lc code=end
