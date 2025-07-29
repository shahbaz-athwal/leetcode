// Created by shahbaz_athwal at 2025/07/28 18:41
// leetgo: 1.4.15
// https://leetcode.com/problems/subarray-sum-equals-k/

/*
560. Subarray Sum Equals K (Medium)
Given an array of integers `nums` and an integer `k`, return the total number of subarrays whose sum
equals to `k`.

A subarray is a contiguous **non-empty** sequence of elements within an array.

**Example 1:**

```
Input: nums = [1,1,1], k = 2
Output: 2
```

**Example 2:**

```
Input: nums = [1,2,3], k = 3
Output: 2
```

**Constraints:**

- `1 <= nums.length <= 2 * 10⁴`
- `-1000 <= nums[i] <= 1000`
- `-10⁷ <= k <= 10⁷`

*/

// @lc code=begin

function subarraySum(nums: number[], k: number): number {
  let sum = 0;
  let result = 0;

  const prefixSumCounts = new Map<number, number>();
  prefixSumCounts.set(0, 1);

  for (const n of nums) {
    sum += n;
    const prefixCount = prefixSumCounts.get(sum - k) || 0;
    result += prefixCount;
    prefixSumCounts.set(sum, (prefixSumCounts.get(sum) || 0) + 1);
  }
  return result;
}

// @lc code=end
