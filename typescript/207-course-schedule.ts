// Created by shahbaz_athwal at 2025/08/18 14:50
// leetgo: 1.4.15
// https://leetcode.com/problems/course-schedule/

/*
207. Course Schedule (Medium)
There are a total of `numCourses` courses you have to take, labeled from `0` to `numCourses - 1`. You
are given an array `prerequisites` where `prerequisites[i] = [aᵢ, bᵢ]` indicates that you **must**
take course `bᵢ` first if you want to take course `aᵢ`.

- For example, the pair `[0, 1]`, indicates that to take course `0` you have to first take course
`1`.

Return `true` if you can finish all courses. Otherwise, return `false`.

**Example 1:**

```
Input: numCourses = 2, prerequisites = [[1,0]]
Output: true
Explanation: There are a total of 2 courses to take.
To take course 1 you should have finished course 0. So it is possible.
```

**Example 2:**

```
Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
Output: false
Explanation: There are a total of 2 courses to take.
To take course 1 you should have finished course 0, and to take course 0 you should also have
finished course 1. So it is impossible.
```

**Constraints:**

- `1 <= numCourses <= 2000`
- `0 <= prerequisites.length <= 5000`
- `prerequisites[i].length == 2`
- `0 <= aᵢ, bᵢ < numCourses`
- All the pairs prerequisites\[i\] are **unique**.

*/

// @lc code=begin

function canFinish(numCourses: number, prerequisites: number[][]): boolean {
  const graph = new Map<number, number[]>();

  for (const [course, prereq] of prerequisites) {
    if (graph.has(prereq)) graph.get(prereq)!.push(course);
    else graph.set(prereq, [course]);
  }

  const visited = new Set();

  function hasCycle(course: number): boolean {
    if (visited.has(course)) return true;
    if ((graph.get(course) || []).length === 0) return false;

    visited.add(course);
    for (const c of graph.get(course) || []) {
      if (hasCycle(c)) return true;
    }
    visited.delete(course);
    graph.delete(course);
    return false;
  }

  for (let i = 0; i < numCourses; i++) {
    if (hasCycle(i)) return false;
  }
  return true;
}

// @lc code=end
