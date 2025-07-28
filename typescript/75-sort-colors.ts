// Created by shahbaz_athwal at 2025/07/27 19:08
// leetgo: 1.4.15
// https://leetcode.com/problems/sort-colors/

/*
75. Sort Colors (Medium)
Given an array `nums` with `n` objects colored red, white, or blue, sort them **[in-
place](https://en.wikipedia.org/wiki/In-place_algorithm)** so that objects of the same color are
adjacent, with the colors in the order red, white, and blue.

We will use the integers `0`, `1`, and `2` to represent the color red, white, and blue,
respectively.

You must solve this problem without using the library's sort function.

**Example 1:**

```
Input: nums = [2,0,2,1,1,0]
Output: [0,0,1,1,2,2]
```

**Example 2:**

```
Input: nums = [2,0,1]
Output: [0,1,2]
```

**Constraints:**

- `n == nums.length`
- `1 <= n <= 300`
- `nums[i]` is either `0`, `1`, or `2`.

**Follow up:** Could you come up with a one-pass algorithm using only constant extra space?

*/

// @lc code=begin

/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums: number[]): void {
  let left = 0;
  let i = 0;
  let right = nums.length - 1;

  while (i <= right) {
    if (nums[i] === 0) {
      nums[left] ^= nums[i]; // x = x^y
      nums[i] ^= nums[left]; // y = y^(x^y) = x
      nums[left] ^= nums[i]; // x = (x^y)^x = y
      left++, i++;
    } else if (nums[i] === 2) {
      if (i !== right) {
        nums[right] ^= nums[i];
        nums[i] ^= nums[right];
        nums[right] ^= nums[i];
      }
      right--;
    } else i++;
  }
}

// @lc code=end
