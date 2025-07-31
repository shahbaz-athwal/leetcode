// Created by shahbaz_athwal at 2025/07/30 21:06
// leetgo: 1.4.15
// https://leetcode.com/problems/permutation-in-string/

/*
567. Permutation in String (Medium)
Given two strings `s1` and `s2`, return `true` if `s2` contains a permutation of `s1`, or `false`
otherwise.

In other words, return `true` if one of `s1`'s permutations is the substring of `s2`.

**Example 1:**

```
Input: s1 = "ab", s2 = "eidbaooo"
Output: true
Explanation: s2 contains one permutation of s1 ("ba").
```

**Example 2:**

```
Input: s1 = "ab", s2 = "eidboaoo"
Output: false
```

**Constraints:**

- `1 <= s1.length, s2.length <= 10⁴`
- `s1` and `s2` consist of lowercase English letters.

*/

// @lc code=begin

function checkInclusion(s1: string, s2: string): boolean {
  const count = new Array(26).fill(0);
  const k = s1.length;
  for (const c of s1) {
    count[c.charCodeAt(0) - 97]++;
  }

  for (let i = 0; i < s2.length; i++) {
    count[s2[i].charCodeAt(0) - 97]--;

    if (i >= k - 1) {
      if (count.every((c) => c === 0)) return true;
      count[s2[i - k + 1].charCodeAt(0) - 97]++;
    }
  }
  return false;
}

// @lc code=end
