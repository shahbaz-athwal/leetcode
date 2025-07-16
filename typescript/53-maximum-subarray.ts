// Created by shahbaz_athwal at 2025/07/15 16:58
// leetgo: 1.4.14
// https://leetcode.com/problems/maximum-subarray/

/*
53. Maximum Subarray (Medium)
Given an integer array `nums`, find the subarray with the largest sum, and return its sum.

**Example 1:**

```
Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: The subarray [4,-1,2,1] has the largest sum 6.
```

**Example 2:**

```
Input: nums = [1]
Output: 1
Explanation: The subarray [1] has the largest sum 1.
```

**Example 3:**

```
Input: nums = [5,4,-1,7,8]
Output: 23
Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.
```

**Constraints:**

- `1 <= nums.length <= 10⁵`
- `-10⁴ <= nums[i] <= 10⁴`

**Follow up:** If you have figured out the `O(n)` solution, try coding another solution using the
**divide and conquer** approach, which is more subtle.

*/

// @lc code=begin

// Time exceeded
function maxSubArray1(nums: number[]): number {
  if (nums.length === 1) return nums[0];

  let maxSum = -Infinity;

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length - i; j++) {
      const sum = nums.slice(j, j + i + 1).reduce((acc, curr) => acc + curr, 0);
      maxSum = Math.max(sum, maxSum);
    }
  }
  return maxSum;
}

function maxSubArray(nums: number[]): number {
  let max = nums[0];
  let current = nums[0];

  for (let i = 1; i < nums.length; i++) {
    current = Math.max(nums[i], current + nums[i]);
    max = Math.max(max, current);
  }

  return max;
}

// @lc code=end

console.log("MAX:", maxSubArray([5, 4, -1, 7, 8]));
console.log("MAX:", maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log("MAX:", maxSubArray([1]));
console.log("MAX:", maxSubArray([-2, 1]));
