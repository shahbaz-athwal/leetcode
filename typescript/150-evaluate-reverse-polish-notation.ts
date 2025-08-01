// Created by shahbaz_athwal at 2025/08/01 02:15
// leetgo: 1.4.15
// https://leetcode.com/problems/evaluate-reverse-polish-notation/

/*
150. Evaluate Reverse Polish Notation (Medium)
You are given an array of strings `tokens` that represents an arithmetic expression in a [Reverse
Polish Notation](http://en.wikipedia.org/wiki/Reverse_Polish_notation).

Evaluate the expression. Return an integer that represents the value of the expression.

**Note** that:

- The valid operators are `'+'`, `'-'`, `'*'`, and `'/'`.
- Each operand may be an integer or another expression.
- The division between two integers always **truncates toward zero**.
- There will not be any division by zero.
- The input represents a valid arithmetic expression in a reverse polish notation.
- The answer and all the intermediate calculations can be represented in a **32-bit** integer.

**Example 1:**

```
Input: tokens = ["2","1","+","3","*"]
Output: 9
Explanation: ((2 + 1) * 3) = 9
```

**Example 2:**

```
Input: tokens = ["4","13","5","/","+"]
Output: 6
Explanation: (4 + (13 / 5)) = 6
```

**Example 3:**

```
Input: tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]
Output: 22
Explanation: ((10 * (6 / ((9 + 3) * -11))) + 17) + 5
= ((10 * (6 / (12 * -11))) + 17) + 5
= ((10 * (6 / -132)) + 17) + 5
= ((10 * 0) + 17) + 5
= (0 + 17) + 5
= 17 + 5
= 22
```

**Constraints:**

- `1 <= tokens.length <= 10⁴`
- `tokens[i]` is either an operator: `"+"`, `"-"`, `"*"`, or `"/"`, or an integer in the range `[-200,
200]`.

*/

// @lc code=begin

function evalRPN(tokens: string[]): number {
  const ops = new Set(["+", "-", "*", "/"]);
  const stack: number[] = [];

  for (const t of tokens) {
    if (!ops.has(t)) {
      stack.push(Number(t));
      continue;
    }
    const a = stack.pop()!;
    const b = stack.pop()!;
    switch (t) {
      case "+": {
        stack.push(b + a);
        break;
      }
      case "-": {
        stack.push(b - a);
        break;
      }
      case "*": {
        stack.push(b * a);
        break;
      }
      case "/": {
        stack.push(Math.trunc(b / a));
        break;
      }
    }
  }

  return stack.pop()!;
}

// @lc code=end
