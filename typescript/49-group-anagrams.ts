// Created by shahbaz_athwal at 2025/07/27 02:35
// leetgo: 1.4.15
// https://leetcode.com/problems/group-anagrams/

/*
49. Group Anagrams (Medium)
Given an array of strings `strs`, group the anagrams together. You can return the answer in **any
order**.

**Example 1:**

**Input:** strs = \["eat","tea","tan","ate","nat","bat"\]

**Output:**\[\["bat"\],\["nat","tan"\],\["ate","eat","tea"\]\]

**Explanation:**

- There is no string in strs that can be rearranged to form `"bat"`.
- The strings `"nat"` and `"tan"` are anagrams as they can be rearranged to form each other.
- The strings `"ate"`, `"eat"`, and `"tea"` are anagrams as they can be rearranged to form each
other.

**Example 2:**

**Input:** strs = \[""\]

**Output:**\[\[""\]\]

**Example 3:**

**Input:** strs = \["a"\]

**Output:**\[\["a"\]\]

**Constraints:**

- `1 <= strs.length <= 10⁴`
- `0 <= strs[i].length <= 100`
- `strs[i]` consists of lowercase English letters.

*/

// @lc code=begin

function groupAnagrams(strs: string[]): string[][] {
  const map = new Map<string, string[]>();

  for (const str of strs) {
    const key = str.split("").sort().join("");

    const arr = map.get(key);

    if (arr) arr.push(str);
    else map.set(key, [str]);
  }

  return Array.from(map.values());
}

// @lc code=end
