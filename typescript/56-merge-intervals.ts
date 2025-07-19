// Created by shahbaz_athwal at 2025/07/18 22:01
// leetgo: 1.4.15
// https://leetcode.com/problems/merge-intervals/

/*
56. Merge Intervals (Medium)
Given an array of `intervals` where `intervals[i] = [startᵢ, endᵢ]`, merge all overlapping
intervals, and return an array of the non-overlapping intervals that cover all the intervals in the
input.

**Example 1:**

```
Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].
```

**Example 2:**

```
Input: intervals = [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.
```

**Constraints:**

- `1 <= intervals.length <= 10⁴`
- `intervals[i].length == 2`
- `0 <= startᵢ <= endᵢ <= 10⁴`

*/

// @lc code=begin

function merge(intervals: number[][]): number[][] {
  intervals.sort((a, b) => a[0] - b[0]);
  let out: number[][] = [];
  let current = intervals[0];

  for (let i = 1; i < intervals.length; i++) {
    const compare = intervals[i];
    if (compare[0] <= current[1]) {
      current[1] = Math.max(compare[1], current[1]);
    } else {
      out.push(current);
      current = compare;
    }
  }
  out.push(current);

  return out;
}

// @lc code=end
