// Created by shahbaz_athwal at 2025/08/12 10:33
// leetgo: 1.4.15
// https://leetcode.com/problems/next-permutation/

/*
31. Next Permutation (Medium)
A **permutation** of an array of integers is an arrangement of its members into a sequence or linear
order.

- For example, for `arr = [1,2,3]`, the following are all the permutations of `arr`: `[1,2,3],
[1,3,2], [2, 1, 3], [2, 3, 1], [3,1,2], [3,2,1]`.

The **next permutation** of an array of integers is the next lexicographically greater permutation
of its integer. More formally, if all the permutations of the array are sorted in one container
according to their lexicographical order, then the **next permutation** of that array is the
permutation that follows it in the sorted container. If such arrangement is not possible, the array
must be rearranged as the lowest possible order (i.e., sorted in ascending order).

- For example, the next permutation of `arr = [1,2,3]` is `[1,3,2]`.
- Similarly, the next permutation of `arr = [2,3,1]` is `[3,1,2]`.
- While the next permutation of `arr = [3,2,1]` is `[1,2,3]` because `[3,2,1]` does not have a
lexicographical larger rearrangement.

Given an array of integers `nums`, find the next permutation of `nums`.

The replacement must be **[in place](http://en.wikipedia.org/wiki/In-place_algorithm)** and use only
constant extra memory.

**Example 1:**

```
Input: nums = [1,2,3]
Output: [1,3,2]
```

**Example 2:**

```
Input: nums = [3,2,1]
Output: [1,2,3]
```

**Example 3:**

```
Input: nums = [1,1,5]
Output: [1,5,1]
```

**Additional Examples:**

```
Input: nums = [1,2,3,4]
Output: [1,2,4,3]
Explanation: Find next greater permutation by swapping 3 and 4
```

```
Input: nums = [1,3,2,4]
Output: [1,3,4,2]
Explanation: 3,2,4 -> 4,2,3, then reverse 2,3 to get 4,2,3
```

**Constraints:**

- `1 <= nums.length <= 100`
- `0 <= nums[i] <= 100`

*/

// @lc code=begin

/**
 Do not return anything, modify nums in-place instead.
 */
function nextPermutation(nums: number[]): void {
  let pivot = -1;
  for (let i = nums.length - 2; i >= 0; i--) {
    if (nums[i] < nums[i + 1]) {
      pivot = i;
      break;
    }
  }

  if (pivot !== -1) {
    for (let j = nums.length - 1; j > pivot; j--) {
      if (nums[j] > nums[pivot]) {
        [nums[j], nums[pivot]] = [nums[pivot], nums[j]];
        break;
      }
    }
  }

  let left = pivot + 1;
  let right = nums.length - 1;
  while (left < right) {
    [nums[left], nums[right]] = [nums[right], nums[left]];
    left++;
    right--;
  }
}

// @lc code=end
