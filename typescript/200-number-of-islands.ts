// Created by shahbaz_athwal at 2025/08/17 03:11
// leetgo: 1.4.15
// https://leetcode.com/problems/number-of-islands/

/*
200. Number of Islands (Medium)
Given an `m x n` 2D binary grid `grid` which represents a map of `'1'` s (land) and `'0'` s (water),
return the number of islands.

An **island** is surrounded by water and is formed by connecting adjacent lands horizontally or
vertically. You may assume all four edges of the grid are all surrounded by water.

**Example 1:**

```
Input: grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
Output: 1
```

**Example 2:**

```
Input: grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
Output: 3
```

**Constraints:**

- `m == grid.length`
- `n == grid[i].length`
- `1 <= m, n <= 300`
- `grid[i][j]` is `'0'` or `'1'`.

*/
// @lc code=begin

//BFS
function numIslands(grid: string[][]): number {
  const [m, n] = [grid.length, grid[0].length];
  const visited = new Set<string>();
  let islands = 0;

  function bfs(i: number, j: number) {
    const queue: [number, number][] = [[i, j]];
    visited.add(`${i},${j}`);

    while (queue.length) {
      const [x, y] = queue.shift()!;

      const dirs = [
        [0, 1],
        [0, -1],
        [1, 0],
        [-1, 0],
      ];

      for (const [dx, dy] of dirs) {
        const r = x + dx;
        const c = y + dy;
        if (
          r < 0 ||
          c < 0 ||
          r >= m ||
          c >= n ||
          grid[r][c] === "0" ||
          visited.has(`${r},${c}`)
        )
          continue;

        queue.push([r, c]);
        visited.add(`${r},${c}`);
      }
    }
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === "1" && !visited.has(`${i},${j}`)) {
        bfs(i, j);
        islands++;
      }
    }
  }

  return islands;
}

// DFS
function numIslandsDFS(grid: string[][]): number {
  const [m, n] = [grid.length, grid[0].length];
  const visited = new Set<string>();
  let islands = 0;

  function dfs(i: number, j: number) {
    if (
      i < 0 ||
      j < 0 ||
      i >= m ||
      j >= n ||
      visited.has(`${i},${j}`) ||
      grid[i][j] === "0"
    ) {
      return;
    }
    visited.add(`${i},${j}`);
    dfs(i - 1, j);
    dfs(i + 1, j);
    dfs(i, j - 1);
    dfs(i, j + 1);
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === "1" && !visited.has(`${i},${j}`)) {
        dfs(i, j);
        islands++;
      }
    }
  }
  return islands;
}
// @lc code=end
