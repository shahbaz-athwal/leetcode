// Created by shahbaz_athwal at 2025/07/15 10:18
// leetgo: 1.4.14
// https://leetcode.com/problems/search-insert-position/

/*
35. Search Insert Position (Easy)
Given a sorted array of distinct integers and a target value, return the index if the target is
found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with `O(log n)` runtime complexity.

**Example 1:**

```
Input: nums = [1,3,5,6], target = 5
Output: 2
```

**Example 2:**

```
Input: nums = [1,3,5,6], target = 2
Output: 1
```

**Example 3:**

```
Input: nums = [1,3,5,6], target = 7
Output: 4
```

**Constraints:**

- `1 <= nums.length <= 10⁴`
- `-10⁴ <= nums[i] <= 10⁴`
- `nums` contains **distinct** values sorted in **ascending** order.
- `-10⁴ <= target <= 10⁴`

*/

// @lc code=begin

function searchInsert(nums: number[], target: number) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return left;
}

// Test cases with [1,3,5,6]
// console.log("Test 1:", searchInsert([1, 3, 5, 6], 5)); // Expected: 2
// console.log("Test 2:", searchInsert([1, 3, 5, 6], 2)); // Expected: 1
// console.log("Test 3:", searchInsert([1, 3, 5, 6], 7)); // Expected: 4
console.log("Test 4:", searchInsert([1, 3, 5, 6], 2)); // Expected: 0

// @lc code=end
