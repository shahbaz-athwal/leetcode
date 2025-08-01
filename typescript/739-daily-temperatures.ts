// Created by shahbaz_athwal at 2025/08/01 04:41
// leetgo: 1.4.15
// https://leetcode.com/problems/daily-temperatures/

/*
739. Daily Temperatures (Medium)
Given an array of integers `temperatures` represents the daily temperatures, return an array
`answer`such that `answer[i]`is the number of days you have to wait after the `iᵗʰ`day to get a
warmer temperature. If there is no future day for which this is possible, keep `answer[i] == 0`
instead.

**Example 1:**

```
Input: temperatures = [73,74,75,71,69,72,76,73]
Output: [1,1,4,2,1,1,0,0]
```

**Example 2:**

```
Input: temperatures = [30,40,50,60]
Output: [1,1,1,0]
```

**Example 3:**

```
Input: temperatures = [30,60,90]
Output: [1,1,0]
```

**Constraints:**

- `1 <= temperatures.length <= 10⁵`
- `30 <= temperatures[i] <= 100`

*/

// @lc code=begin

function dailyTemperatures(temperatures: number[]): number[] {
  let out = new Array(temperatures.length).fill(0);
  const stack: number[] = [];

  for (let i = 0; i < temperatures.length; i++) {
    while (
      stack.length > 0 &&
      temperatures[i] > temperatures[stack[stack.length - 1]]
    ) {
      const curr = stack.pop()!;
      out[curr] = i - curr;
    }
    stack.push(i);
  }

  return out;
}

// @lc code=end
