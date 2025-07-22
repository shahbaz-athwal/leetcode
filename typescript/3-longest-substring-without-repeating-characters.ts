// Created by shahbaz_athwal at 2025/07/20 20:22
// leetgo: 1.4.15
// https://leetcode.com/problems/longest-substring-without-repeating-characters/

/*
3. Longest Substring Without Repeating Characters (Medium)
Given a string `s`, find the length of the **longest** **substring** without duplicate characters.

**Example 1:**

```
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
```

**Example 2:**

```
Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
```

**Example 3:**

```
Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
```

**Constraints:**

- `0 <= s.length <= 5 * 10⁴`
- `s` consists of English letters, digits, symbols and spaces.

*/

// original
function lengthOfLongestSubstring1(s: string): number {
  let start = 0;
  let result = 0;
  let map = new Map<string, 1>();
  for (let end = 0; end < s.length; end++) {
    let e = s[end];
    let c: number | undefined;

    do {
      c = map.get(e);
      if (c) {
        map.delete(s[start]);
        start++;
      } else {
        map.set(e, 1);
      }
    } while (c);

    result = Math.max(result, map.size);
  }
  return result;
}

// optimal
function lengthOfLongestSubstring2(s: string): number {
  let start = 0;
  let result = 0;
  let map = new Map<string, number>();
  for (let end = 0; end < s.length; end++) {
    const curr = s[end];
    const lastSeenIndex = map.get(curr)!;

    if (lastSeenIndex >= start) {
      start = lastSeenIndex + 1;
    }
    map.set(curr, end);
    result = Math.max(result, end - start + 1);
  }
  return result;
}

// @lc code=begin

// best
function lengthOfLongestSubstring(s: string): number {
  let start = 0;
  let result = 0;
  let arr = new Array(123).fill(-1);
  for (let end = 0; end < s.length; end++) {
    const code = s.charCodeAt(end);

    if (arr[code] >= start) {
      start = arr[code] + 1;
    }
    arr[code] = end;
    result = Math.max(result, end - start + 1);
  }
  return result;
}

// @lc code=end

lengthOfLongestSubstring("abcabcbb");
