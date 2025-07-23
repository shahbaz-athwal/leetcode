// Created by shahbaz_athwal at 2025/07/20 18:00
// leetgo: 1.4.15
// https://leetcode.com/problems/minimum-size-subarray-sum/

/*
209. Minimum Size Subarray Sum (Medium)
Given an array of positive integers `nums` and a positive integer `target`, return the **minimal
length** of a subarray whose sum is greater than or equal to `target`. If there is no such subarray,
return `0` instead.

**Example 1:**

```
Input: target = 7, nums = [2,3,1,2,4,3]
Output: 2
Explanation: The subarray [4,3] has the minimal length under the problem constraint.
```

**Example 2:**

```
Input: target = 4, nums = [1,4,4]
Output: 1
```

**Example 3:**

```
Input: target = 11, nums = [1,1,1,1,1,1,1,1]
Output: 0
```

**Constraints:**

- `1 <= target <= 10⁹`
- `1 <= nums.length <= 10⁵`
- `1 <= nums[i] <= 10⁴`

**Follow up:** If you have figured out the `O(n)` solution, try coding another solution of which the
time complexity is `O(n log(n))`.

*/

// @lc code=begin

// O(n) - time
function minSubArrayLen(target: number, nums: number[]): number {
  let start = 0;
  let result = Infinity;
  let currSum = 0;

  for (let i = 0; i < nums.length; i++) {
    currSum += nums[i];

    while (currSum >= target) {
      result = Math.min(result, i - start + 1);
      currSum -= nums[start];
      start++;
    }
  }

  return result === Infinity ? 0 : result;
}

// @lc code=end
