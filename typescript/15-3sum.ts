// Created by shahbaz_athwal at 2025/07/23 18:06
// leetgo: 1.4.15
// https://leetcode.com/problems/3sum/

/*
15. 3Sum (Medium)
Given an integer array nums, return all the triplets `[nums[i], nums[j], nums[k]]` such that `i !=
j`, `i != k`, and `j != k`, and `nums[i] + nums[j] + nums[k] == 0`.

Notice that the solution set must not contain duplicate triplets.

**Example 1:**

```
Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation:
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.
```

**Example 2:**

```
Input: nums = [0,1,1]
Output: []
Explanation: The only possible triplet does not sum up to 0.
```

**Example 3:**

```
Input: nums = [0,0,0]
Output: [[0,0,0]]
Explanation: The only possible triplet sums up to 0.
```

**Constraints:**

- `3 <= nums.length <= 3000`
- `-10⁵ <= nums[i] <= 10⁵`

*/

// @lc code=begin

function threeSum(nums: number[]): number[][] {
  nums.sort((a, b) => a - b);
  const n = nums.length;
  const out: number[][] = [];

  for (let i = 0; i < n; i++) {
    const x = nums[i];
    if (i > 0) {
      if (nums[i - 1] == nums[i]) continue;
    }
    if (x > 0) continue;
    let start = i + 1;
    let end = n - 1;

    while (end > start) {
      const y = nums[start];
      const z = nums[end];

      if (x + y + z === 0) {
        out.push([x, y, z]);
        start++;
        while (start < end && nums[start] === nums[start - 1]) start++;
      } else if (y + z > -x) end--;
      else start++;
    }
  }

  return out;
}

// @lc code=end

function threeSum1(nums: number[]): number[][] {
  nums.sort();
  const n = nums.length;
  const set = new Set();
  const out: number[][] = [];

  for (let i = 0; i < n; i++) {
    const x = nums[i];
    for (let j = 0; j < n; j++) {
      if (i == j) continue;
      for (let k = 0; k < n; k++) {
        if (j == k || i == k) continue;
        const y = nums[j],
          z = nums[k];
        if (x + y + z === 0) {
          const arr = [x, y, z].sort();
          const key = arr.toString();
          if (!set.has(key)) {
            set.add(key);
            out.push(arr);
          }
        }
      }
    }
  }

  return out;
}
