// Created by shahbaz_athwal at 2025/07/13 12:31
// leetgo: 1.4.14
// https://leetcode.com/problems/two-sum/

/*
1. Two Sum (Easy)
Given an array of integers `nums` and an integer `target`, return indices of the two numbers such
that they add up to `target`.

You may assume that each input would have **exactly one solution**, and you may not use the same
element twice.

You can return the answer in any order.

**Example 1:**

```
Input: nums = [2,7,11,15,10], target = 12
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
```

**Example 2:**

```
Input: nums = [3,2,4], target = 6
Output: [1,2]
```

**Example 3:**

```
Input: nums = [3,3], target = 6
Output: [0,1]
```

**Constraints:**

- `2 <= nums.length <= 10⁴`
- `-10⁹ <= nums[i] <= 10⁹`
- `-10⁹ <= target <= 10⁹`
- **Only one valid answer exists.**

**Follow-up:** Can you come up with an algorithm that is less than `O(n²)` time complexity?

*/

// @lc code=begin

// o(n^2)
function twoSum0(nums: number[], target: number) {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] + nums[j] === target && i !== j) {
        return [i, j];
      }
    }
  }
}

function twoSum(nums: number[], target: number) {
  const map = new Map<number, number>();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }
}

// @lc code=end
