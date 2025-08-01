// Created by shahbaz_athwal at 2025/08/01 08:09
// leetgo: 1.4.15
// https://leetcode.com/problems/reverse-vowels-of-a-string/

/*
345. Reverse Vowels of a String (Easy)
Given a string `s`, reverse only all the vowels in the string and return it.

The vowels are `'a'`, `'e'`, `'i'`, `'o'`, and `'u'`, and they can appear in both lower and upper
cases, more than once.

**Example 1:**

**Input:** s = "IceCreAm"

**Output:**"AceCreIm"

**Explanation:**

The vowels in `s` are `['I', 'e', 'e', 'A']`. On reversing the vowels, s becomes `"AceCreIm"`.

**Example 2:**

**Input:** s = "leetcode"

**Output:**"leotcede"

**Constraints:**

- `1 <= s.length <= 3 * 10⁵`
- `s` consist of **printable ASCII** characters.

*/

// @lc code=begin

function reverseVowels(s: string): string {
  const vowels = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);
  const str = s.split("");

  let left = 0,
    right = s.length - 1;

  while (left < right) {
    if (!vowels.has(s[left])) {
      left++;
      continue;
    }
    if (!vowels.has(s[right])) {
      right--;
      continue;
    }

    [str[left], str[right]] = [str[right], str[left]];
    left++, right--;
  }
  return str.join("");
}

// @lc code=end
