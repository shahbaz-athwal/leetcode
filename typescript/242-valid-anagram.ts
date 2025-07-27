// Created by shahbaz_athwal at 2025/07/27 02:03
// leetgo: 1.4.15
// https://leetcode.com/problems/valid-anagram/

/*
242. Valid Anagram (Easy)
Given two strings `s` and `t`, return `true` if `t` is an anagram of `s`, and `false` otherwise.

**Example 1:**

**Input:** s = "anagram", t = "nagaram"

**Output:** true

**Example 2:**

**Input:** s = "rat", t = "car"

**Output:** false

**Constraints:**

- `1 <= s.length, t.length <= 5 * 10⁴`
- `s` and `t` consist of lowercase English letters.

**Follow up:** What if the inputs contain Unicode characters? How would you adapt your solution to
such a case?

*/

// @lc code=begin

function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;
  const freq = new Array(26).fill(0);
  for (const c of s) {
    freq[c.charCodeAt(0) - "a".charCodeAt(0)]++;
  }

  for (const c of t) {
    const count = --freq[c.charCodeAt(0) - "a".charCodeAt(0)];
    if (count < 0) return false;
  }

  return true;
}

// @lc code=end

// one-liner
function isAnagram1(s: string, t: string): boolean {
  return s.split("").sort().join("") === t.split("").sort().join("");
}
