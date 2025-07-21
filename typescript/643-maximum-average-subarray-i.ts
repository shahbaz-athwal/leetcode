// Created by shahbaz_athwal at 2025/07/20 19:22
// leetgo: 1.4.15
// https://leetcode.com/problems/maximum-average-subarray-i/

/*
643. Maximum Average Subarray I (Easy)
You are given an integer array `nums` consisting of `n` elements, and an integer `k`.

Find a contiguous subarray whose **length is equal to** `k` that has the maximum average value and
return this value. Any answer with a calculation error less than `10⁻⁵` will be accepted.

**Example 1:**

```
Input: nums = [1,12,-5,-6,50,3], k = 4
Output: 12.75000
Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75
```

**Example 2:**

```
Input: nums = [5], k = 1
Output: 5.00000
```

**Constraints:**

- `n == nums.length`
- `1 <= k <= n <= 10⁵`
- `-10⁴ <= nums[i] <= 10⁴`

*/

// @lc code=begin

function findMaxAverage(nums: number[], k: number): number {
  let sum = nums.slice(0, k).reduce((acc, curr) => acc + curr);
  let maxSum = sum;

  for (let i = 0; i + k < nums.length; i++) {
    sum = sum - nums[i] + nums[i + k];
    maxSum = Math.max(maxSum, sum);
  }
  return maxSum / k;
}

// @lc code=end
