// Created by shahbaz_athwal at 2025/07/26 23:57
// leetgo: 1.4.15
// https://leetcode.com/problems/valid-sudoku/

/*
36. Valid Sudoku (Medium)
Determine if a `9 x 9` Sudoku board is valid. Only the filled cells need to be validated **according
to the following rules**:

1. Each row must contain the digits `1-9` without repetition.
2. Each column must contain the digits `1-9` without repetition.
3. Each of the nine `3 x 3` sub-boxes of the grid must contain the digits `1-9` without repetition.

**Note:**

- A Sudoku board (partially filled) could be valid but is not necessarily solvable.
- Only the filled cells need to be validated according to the mentioned rules.

**Example 1:**

![](https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Sudoku-by-L2G-20050714.svg/250px-Sudoku-by-L2G-20050714.svg.png)

```
Input: board =
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
Output: true
```

**Example 2:**

```
Input: board =
[["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
Output: false
Explanation: Same as Example 1, except with the 5 in the top left corner being modified to 8. Since
there are two 8's in the top left 3x3 sub-box, it is invalid.
```

**Constraints:**

- `board.length == 9`
- `board[i].length == 9`
- `board[i][j]` is a digit `1-9` or `'.'`.

*/

// @lc code=begin

function isValidSudoku(board: string[][]): boolean {
  const row = Array.from({ length: 9 }, () => new Set<string>());
  const col = Array.from({ length: 9 }, () => new Set<string>());
  const boxMap = new Map<string, Set<string>>();

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const target = board[i][j];
      if (target === ".") continue;

      const key = Math.floor(i / 3) + "," + Math.floor(j / 3);
      let box = boxMap.get(key);

      if (!box) {
        box = new Set<string>();
        boxMap.set(key, box);
      }

      if (row[i].has(target) || col[j].has(target) || box.has(target)) {
        return false;
      }

      row[i].add(target);
      col[j].add(target);
      box.add(target);
    }
  }
  return true;
}

// @lc code=end
