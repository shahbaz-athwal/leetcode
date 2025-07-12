// Created by shahbaz_athwal at 2025/07/12 17:23
// leetgo: 1.4.14
// https://leetcode.com/problems/contains-duplicate/

/*
217. Contains Duplicate (Easy)
Given an integer array `nums`, return `true` if any value appears **at least twice** in the array,
and return `false` if every element is distinct.

**Example 1:**

**Input:** nums = \[1,2,3,1\]

**Output:** true

**Explanation:**

The element 1 occurs at the indices 0 and 3.

**Example 2:**

**Input:** nums = \[1,2,3,4\]

**Output:** false

**Explanation:**

All elements are distinct.

**Example 3:**

**Input:** nums = \[1,1,1,3,3,4,3,2,4,2\]

**Output:** true

**Constraints:**

- `1 <= nums.length <= 10⁵`
- `-10⁹ <= nums[i] <= 10⁹`

*/

// @lc code=begin

// original
function containsDuplicate(nums: number[]): boolean {
  return new Set(nums).size !== nums.length;
}

// early exit
function containsDuplicate2(nums: number[]): boolean {
  const seen = new Set<number>();
  for (const num of nums) {
    if (seen.has(num)) return true;
    seen.add(num);
  }
  return false;
}

// sorted array
function containsDuplicate3(nums: number[]): boolean {
  nums.sort((a, b) => a - b);
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) return true;
  }
  return false;
}
// @lc code=end
