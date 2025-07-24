// Created by shahbaz_athwal at 2025/07/23 20:38
// leetgo: 1.4.15
// https://leetcode.com/problems/sqrtx/

/*
69. Sqrt(x) (Easy)
Given a non-negative integer `x`, return the square root of  `x` rounded down to the nearest integer.
The returned integer should be **non-negative** as well.

You **must not use** any built-in exponent function or operator.

- For example, do not use `pow(x, 0.5)` in c++ or `x ** 0.5` in python.

**Example 1:**

```
Input: x = 4
Output: 2
Explanation: The square root of 4 is 2, so we return 2.
```

**Example 2:**

```
Input: x = 8
Output: 2
Explanation: The square root of 8 is 2.82842..., and since we round it down to the nearest integer,
2 is returned.
```

**Constraints:**

- `0 <= x <= 2³¹ - 1`

*/

// @lc code=begin

function mySqrt(x: number): number {
  let start = 0;
  let end = x;

  while (end >= start) {
    const mid = start + Math.floor((end - start) / 2);
    if (mid * mid === x) return mid;

    if (mid * mid > x) end = mid - 1;
    else {
      start = mid + 1;
    }
  }
  return end;
}

// @lc code=end
