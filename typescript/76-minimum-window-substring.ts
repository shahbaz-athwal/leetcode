// Created by shahbaz_athwal at 2025/07/25 14:52
// leetgo: 1.4.15
// https://leetcode.com/problems/minimum-window-substring/

/*
76. Minimum Window Substring (Hard)
Given two strings `s` and `t` of lengths `m` and `n` respectively, return the **minimum
window****substring** of  `s` such that every character in  `t` ( **including duplicates**) is
included in the window. If there is no such substring, return the empty string  `""`.

The testcases will be generated such that the answer is **unique**.

**Example 1:**

```
Input: s = "ADOBECODEBANC", t = "ABC"
Output: "BANC"
Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.
```

**Example 2:**

``` s
Input: s = "a", t = "a"
Output: "a"
Explanation: The entire string s is the minimum window.
```

**Example 3:**

```
Input: s = "a", t = "aa"
Output: ""
Explanation: Both 'a's from t must be included in the window.
Since the largest window of s only has one 'a', return empty string.
```

**Constraints:**

- `m == s.length`
- `n == t.length`
- `1 <= m, n <= 10⁵`
- `s` and `t` consist of uppercase and lowercase English letters.

**Follow up:** Could you find an algorithm that runs in `O(m + n)` time?

*/

// @lc code=begin
function minWindow(s: string, t: string): string {
  let resultLength = Infinity;
  const result = [0, 0];
  let start = 0;

  const needMap = new Map<string, number>();
  for (const c of t) {
    needMap.set(c, (needMap.get(c) || 0) + 1);
  }
  const need = needMap.size;

  const haveMap = new Map<string, number>();
  let have = 0;

  for (let end = 0; end < s.length; end++) {
    const count = needMap.get(s[end]);
    if (count === undefined) continue;

    const haveCount = (haveMap.get(s[end]) || 0) + 1;
    haveMap.set(s[end], haveCount);
    if (haveCount === count) have++;

    while (have >= need) {
      if (end - start + 1 < resultLength) {
        resultLength = end - start + 1;
        result[0] = start;
        result[1] = end + 1;
      }

      const currentHaveCount = haveMap.get(s[start]);
      const needCount = needMap.get(s[start]);
      if (currentHaveCount !== undefined && needCount !== undefined) {
        haveMap.set(s[start], currentHaveCount - 1);
        if (currentHaveCount - 1 < needCount) have--;
      }
      start++;
    }
  }

  return s.slice(result[0], result[1]);
}

// @lc code=end
