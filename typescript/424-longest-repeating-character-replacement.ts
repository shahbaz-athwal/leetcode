// Created by shahbaz_athwal at 2025/07/30 22:07
// leetgo: 1.4.15
// https://leetcode.com/problems/longest-repeating-character-replacement/

/*
424. Longest Repeating Character Replacement (Medium)
You are given a string `s` and an integer `k`. You can choose any character of the string and change
it to any other uppercase English character. You can perform this operation at most `k` times.

Return the length of the longest substring containing the same letter you can get after performing
the above operations.

**Example 1:**

```
Input: s = "ABAB", k = 2
Output: 4
Explanation: Replace the two 'A's with two 'B's or vice versa.
```

**Example 2:**

```
Input: s = "AABABBA", k = 1
Output: 4
Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
The substring "BBBB" has the longest repeating letters, which is 4.
There may exists other ways to achieve this answer too.
```

**Constraints:**

- `1 <= s.length <= 10⁵`
- `s` consists of only uppercase English letters.
- `0 <= k <= s.length`

*/

// @lc code=begin

function characterReplacement(s: string, k: number): number {
  const count = new Array(26).fill(0);
  let start = 0,
    maxCount = 0,
    maxResult = 0;

  for (let i = 0; i < s.length; i++) {
    const char = s[i].charCodeAt(0) - 65;
    count[char]++;
    maxCount = Math.max(count[char], maxCount);

    while (i - start + 1 - maxCount > k) {
      count[s[start].charCodeAt(0) - 65]--;
      start++;
    }
    maxResult = Math.max(maxResult, i - start + 1);
  }
  return maxResult;
}

// @lc code=end
