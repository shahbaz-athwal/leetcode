// Created by shahbaz_athwal at 2025/07/20 11:48
// leetgo: 1.4.15
// https://leetcode.com/problems/set-matrix-zeroes/

/*
73. Set Matrix Zeroes (Medium)
Given an `m x n` integer matrix `matrix`, if an element is `0`, set its entire row and column to
`0`'s.

You must do it [in place](https://en.wikipedia.org/wiki/In-place_algorithm).

**Example 1:**

![](https://assets.leetcode.com/uploads/2020/08/17/mat1.jpg)

```
Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
Output: [[1,0,1],[0,0,0],[1,0,1]]
```

**Example 2:**

![](https://assets.leetcode.com/uploads/2020/08/17/mat2.jpg)

```
Input: matrix = [
  [0, 1, 2, 0],
  [3, 4, 5, 2],
  [1, 3, 1, 5]
]
Output: [
  [0, 0, 0, 0],
  [0, 4, 5, 0],
  [0, 3, 1, 0]
]
```

**Constraints:**

- `m == matrix.length`
- `n == matrix[0].length`
- `1 <= m, n <= 200`
- `-2³¹ <= matrix[i][j] <= 2³¹ - 1`

**Follow up:**

- A straightforward solution using `O(mn)` space is probably a bad idea.
- A simple improvement uses `O(m + n)` space, but still not the best solution.
- Could you devise a constant space solution?

*/

// @lc code=begin
// O(m*n)
function setZeroes1(matrix: number[][]): void {
  const copy = structuredClone(matrix);
  for (let m = 0; m < matrix.length; m++) {
    for (let n = 0; n < matrix[0].length; n++) {
      if (copy[m][n] === 0) {
        // matrix[m][0..n] = 0
        for (let i = 0; i < matrix[0].length; i++) {
          matrix[m][i] = 0;
        }
        // matrix[0..n][m] = 0
        for (let i = 0; i < matrix.length; i++) {
          matrix[i][n] = 0;
        }
      }
    }
  }
}

function setZeroes(matrix: number[][]): void {
  const n = matrix[0].length;
  const m = matrix.length;
  let zeroRow = new Set<number>();
  let zeroCol = new Set<number>();

  for (let k = 0; k < m; k++) {
    for (let j = 0; j < n; j++) {
      if (matrix[k][j] === 0) {
        zeroRow.add(k);
        zeroCol.add(j);
      }
    }
  }

  for (const r of zeroRow) {
    matrix[r] = new Array(n).fill(0);
  }
  for (let i = 0; i < m; i++) {
    for (const c of zeroCol) {
      matrix[i][c] = 0;
    }
  }
}

function setZeroes2(matrix: number[][]): void {
  const m = matrix.length;
  const n = matrix[0].length;

  let firstRowHasZero = false;
  let firstColHasZero = false;

  // Step 1: Check if the first row needs to be zeroed
  for (let j = 0; j < n; j++) {
    if (matrix[0][j] === 0) {
      firstRowHasZero = true;
      break;
    }
  }

  // Step 1: Check if the first column needs to be zeroed
  for (let i = 0; i < m; i++) {
    if (matrix[i][0] === 0) {
      firstColHasZero = true;
      break;
    }
  }

  // Step 2: Use the first row and column as markers for the rest of the matrix
  // Iterate from (1,1) to (m-1, n-1)
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (matrix[i][j] === 0) {
        matrix[i][0] = 0; // Mark corresponding row
        matrix[0][j] = 0; // Mark corresponding column
      }
    }
  }

  // Step 3: Zero out rows based on markers in the first column
  // Iterate from row 1 to m-1
  for (let i = 1; i < m; i++) {
    if (matrix[i][0] === 0) {
      for (let j = 0; j < n; j++) {
        matrix[i][j] = 0;
      }
    }
  }

  // Step 3: Zero out columns based on markers in the first row
  // Iterate from column 1 to n-1
  for (let j = 1; j < n; j++) {
    if (matrix[0][j] === 0) {
      for (let i = 0; i < m; i++) {
        matrix[i][j] = 0;
      }
    }
  }

  // Step 4: Zero out the first row if it originally had a zero
  if (firstRowHasZero) {
    for (let j = 0; j < n; j++) {
      matrix[0][j] = 0;
    }
  }

  // Step 4: Zero out the first column if it originally had a zero
  if (firstColHasZero) {
    for (let i = 0; i < m; i++) {
      matrix[i][0] = 0;
    }
  }
}

// @lc code=end
