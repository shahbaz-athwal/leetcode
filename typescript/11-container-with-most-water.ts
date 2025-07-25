// Created by shahbaz_athwal at 2025/07/15 11:41
// leetgo: 1.4.14
// https://leetcode.com/problems/container-with-most-water/

/*
11. Container With Most Water (Medium)
You are given an integer array `height` of length `n`. There are `n` vertical lines drawn such that
the two endpoints of the `iᵗʰ` line are `(i, 0)` and `(i, height[i])`.

Find two lines that together with the x-axis form a container, such that the container contains the
most water.

Return the maximum amount of water a container can store.

**Notice** that you may not slant the container.

**Example 1:**

![](https://s3-lc-upload.s3.amazonaws.com/uploads/2018/07/17/question_11.jpg)

```
Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case,
the max area of water (blue section) the container can contain is 49.
```

**Example 2:**

```
Input: height = [1,1]
Output: 1
```

**Constraints:**

- `n == height.length`
- `2 <= n <= 10⁵`
- `0 <= height[i] <= 10⁴`

*/

// @lc code=begin

//  O(nlogn) - time
function maxArea1(height: number[]): number {
  let max = 0;

  for (let i = 0; i <= height.length - 1; i++) {
    for (let j = i + 1; j <= height.length - 1; j++) {
      const vol = Math.min(height[i], height[j]) * Math.abs(i - j);
      max = Math.max(vol, max);
    }
  }
  return max;
}

// O(n)
function maxArea(height: number[]): number {
  let max = 0;
  let left = 0;
  let right = height.length - 1;
  while (left < right) {
    const vol = Math.min(height[left], height[right]) * (right - left);
    max = Math.max(vol, max);
    if (height[left] > height[right]) {
      right--;
    } else {
      left++;
    }
  }
  return max;
}

// @lc code=end
