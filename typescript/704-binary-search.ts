// Created by shahbaz_athwal at 2025/07/13 11:10
// leetgo: 1.4.14
// https://leetcode.com/problems/binary-search/

/*
704. Binary Search (Easy)
Given an array of integers `nums` which is sorted in ascending order, and an integer `target`, write
a function to search `target` in `nums`. If `target` exists, then return its index. Otherwise,
return `-1`.

You must write an algorithm with `O(log n)` runtime complexity.

**Example 1:**

```
Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4
```

**Example 2:**

```
Input: nums = [-1,0,3,5,9,12], target = 2
Output: -1
Explanation: 2 does not exist in nums so return -1
```

**Constraints:**

- `1 <= nums.length <= 10⁴`
- `-10⁴ < nums[i], target < 10⁴`
- All the integers in `nums` are **unique**.
- `nums` is sorted in ascending order.

*/

// @lc code=begin

function search(nums: number[], target: number): number {
  let lowerLimit = 0;
  let upperlimit = nums.length - 1;

  while (lowerLimit <= upperlimit) {
    let i = Math.floor((lowerLimit + upperlimit) / 2);
    if (nums[i] > target) {
      upperlimit = i - 1;
    } else if (nums[i] < target) {
      lowerLimit = i + 1;
    } else {
      return i;
    }
  }
  return -1;
}

// @lc code=end
