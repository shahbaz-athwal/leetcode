// Created by shahbaz_athwal at 2025/08/01 00:25
// leetgo: 1.4.15
// https://leetcode.com/problems/valid-parentheses/

/*
20. Valid Parentheses (Easy)
Given a string `s` containing just the characters `'('`, `')'`, `'{'`, `'}'`, `'['` and `']'`,
determine if the input string is valid.

An input string is valid if:

1. Open brackets must be closed by the same type of brackets.
2. Open brackets must be closed in the correct order.
3. Every close bracket has a corresponding open bracket of the same type.

**Example 1:**

**Input:** s = "()"

**Output:** true

**Example 2:**

**Input:** s = "()\[\]{}"

**Output:** true

**Example 3:**

**Input:** s = "(\]"

**Output:** false

**Example 4:**

**Input:** s = "(\[\])"

**Output:** true

**Example 5:**

**Input:** s = "(\[)\]"

**Output:** false

**Constraints:**

- `1 <= s.length <= 10⁴`
- `s` consists of parentheses only `'()[]{}'`.

*/

// @lc code=begin

function isValid(s: string): boolean {
  const pairs = new Map([
    [")", "("],
    ["}", "{"],
    ["]", "["],
  ]);
  const stack: string[] = [];

  for (const char of s) {
    if (pairs.has(char)) {
      if (stack.pop() !== pairs.get(char)) return false;
    } else {
      stack.push(char);
    }
  }

  return stack.length === 0;
}

// @lc code=end
