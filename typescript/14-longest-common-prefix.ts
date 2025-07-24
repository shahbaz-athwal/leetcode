// Created by shahbaz_athwal at 2025/07/22 01:21
// leetgo: 1.4.15
// https://leetcode.com/problems/longest-common-prefix/

/*
14. Longest Common Prefix (Easy)
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string `""`.

**Example 1:**

```
Input: strs = ["flower","flow","flight"]
Output: "fl"
```

**Example 2:**

```
Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
```

**Constraints:**

- `1 <= strs.length <= 200`
- `0 <= strs[i].length <= 200`
- `strs[i]` consists of only lowercase English letters if it is non-empty.

*/

// @lc code=begin

function longestCommonPrefix(strs: string[]): string {
  let out = strs[0];
  const minLength = Math.min(...strs.map((s) => s.length));
  if (minLength === 0) return "";

  for (let i = 0; i < minLength; i++) {
    for (const str of strs) {
      if (str[i] !== out[i]) return out.substring(0, i);
    }
  }

  return out.substring(0, minLength);
}

// @lc code=end

function longestCommonPrefix1(strs: string[]): string {
  let out = strs[0];
  const minLength = Math.min(...strs.map((s) => s.length));
  for (let j = 1; j < strs.length; j++) {
    if (minLength === 0 || out === "") return "";
    let len = 0;
    for (let i = 0; i < minLength; i++) {
      if (strs[j][i] === out[i]) {
        len++;
      } else break;
    }
    out = out.substring(0, len);
  }

  return out;
}
