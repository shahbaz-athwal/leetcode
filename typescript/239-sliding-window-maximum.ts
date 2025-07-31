// Created by shahbaz_athwal at 2025/07/30 16:10
// leetgo: 1.4.15
// https://leetcode.com/problems/sliding-window-maximum/

/*
239. Sliding Window Maximum (Hard)
You are given an array of integers `nums`, there is a sliding window of size `k` which is moving
from the very left of the array to the very right. You can only see the `k` numbers in the window.
Each time the sliding window moves right by one position.

Return the max sliding window.

**Example 1:**

```
Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
Output: [3,3,5,5,6,7]
Explanation:
Window position                Max
---------------               -----
[1  3  -1] -3  5  3  6  7       3
 1 [3  -1  -3] 5  3  6  7       3
 1  3 [-1  -3  5] 3  6  7       5
 1  3  -1 [-3  5  3] 6  7       5
 1  3  -1  -3 [5  3  6] 7       6
 1  3  -1  -3  5 [3  6  7]      7
```

**Example 2:**

```
Input: nums = [1], k = 1
Output: [1]
```

**Constraints:**

- `1 <= nums.length <= 10⁵`
- `-10⁴ <= nums[i] <= 10⁴`
- `1 <= k <= nums.length`

*/

// @lc code=begin

function maxSlidingWindow(nums: number[], k: number): number[] {
  const out: number[] = [];
  const deque: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    if (deque.length > 0 && i - k === deque[0]) deque.shift();

    while (deque.length > 0 && nums[i] > nums[deque[deque.length - 1]])
      deque.pop();

    deque.push(i);

    if (i >= k - 1) out.push(nums[deque[0]]);
  }

  return out;
}

// @lc code=end
