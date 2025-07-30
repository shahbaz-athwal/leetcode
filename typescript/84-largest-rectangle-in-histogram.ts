// Created by shahbaz_athwal at 2025/07/28 20:05
// leetgo: 1.4.15
// https://leetcode.com/problems/largest-rectangle-in-histogram/

/*
84. Largest Rectangle in Histogram (Hard)
Given an array of integers `heights` representing the histogram's bar height where the width of each
bar is `1`, return the area of the largest rectangle in the histogram.

**Example 1:**

![](https://assets.leetcode.com/uploads/2021/01/04/histogram.jpg)

```
Input: heights = [2,1,5,6,2,3]
Output: 10
Explanation: The above is a histogram where width of each bar is 1.
The largest rectangle is shown in the red area, which has an area = 10 units.
```

**Example 2:**

![](https://assets.leetcode.com/uploads/2021/01/04/histogram-1.jpg)

```
Input: heights = [2,4]
Output: 4
```

**Constraints:**

- `1 <= heights.length <= 10⁵`
- `0 <= heights[i] <= 10⁴`

*/

// @lc code=begin

function largestRectangleArea(heights: number[]): number {
  let max = 0;
  const nextSmallestIndex = new Array(heights.length).fill(heights.length);
  const previousSmallestIndex = new Array(heights.length).fill(-1);
  const stack: number[] = [];

  for (let i = 0; i < heights.length; i++) {
    const current = heights[i];

    while (stack.length > 0 && current < heights[stack[stack.length - 1]]) {
      const topIndex = stack.pop()!;
      nextSmallestIndex[topIndex] = i;
    }
    if (stack.length > 0) previousSmallestIndex[i] = stack[stack.length - 1];

    stack.push(i);
  }

  for (let i = 0; i < heights.length; i++) {
    const current = heights[i];
    const nextSmallest = nextSmallestIndex[i];
    const prevSmallest = previousSmallestIndex[i];

    const area = current * (nextSmallest - (prevSmallest + 1));
    max = Math.max(max, area);
  }

  return max;
}

// @lc code=end
