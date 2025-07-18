// Created by shahbaz_athwal at 2025/07/17 22:17
// leetgo: 1.4.15
// https://leetcode.com/problems/spiral-matrix/

/*
54. Spiral Matrix (Medium)
Given an `m x n` `matrix`, return all elements of the `matrix`in spiral order.

**Example 1:**

![](https://assets.leetcode.com/uploads/2020/11/13/spiral1.jpg)

```
Input: matrix = [[1,2,3,10],
                 [4,5,6,11],
                 [7,8,9 12],
                 [7,8,9 12]]
Output: [1,2,3,6,9,8,7,4,5]
```

**Example 2:**

![](https://assets.leetcode.com/uploads/2020/11/13/spiral.jpg)

```
Input: matrix = [[1,2,3,4]
                ,[5,6,7,8],
                 [9,10,11,12]]
Output: [1,2,3,4,8,12,11,10,9,5,6,7]
```

**Constraints:**

- `m == matrix.length`
- `n == matrix[i].length`
- `1 <= m, n <= 10`
- `-100 <= matrix[i][j] <= 100`

*/

// @lc code=begin

function spiralOrder(matrix: number[][]): number[] {
  let out: number[] = [];
  let top = 0;
  let bottom = matrix.length - 1;
  let left = 0;
  let right = matrix[0].length - 1;

  while (left <= right && top <= bottom) {
    // top-left: left--->right then top--
    for (let j = left; j <= right; j++) {
      out.push(matrix[top][j]);
    }
    top++;

    // top-right: top---->bottom then right--
    for (let i = top; i <= bottom; i++) {
      out.push(matrix[i][right]);
    }
    right--;

    // bottom-right: right--->left then bottom--
    if (top <= bottom) {
      for (let j = right; j >= left; j--) {
        out.push(matrix[bottom][j]);
      }
      bottom--;
    }

    // bottom-left: bottom--->top then left--
    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        out.push(matrix[i][left]);
      }
      left++;
    }
  }
  return out;
}

// spiralOrder([
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9, 10, 11, 12],
// ]);
// @lc code=end
