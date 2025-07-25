// Created by shahbaz_athwal at 2025/07/12 16:04
// leetgo: 1.4.14
// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

/*
121. Best Time to Buy and Sell Stock (Easy)
You are given an array `prices` where `prices[i]` is the price of a given stock on the `iᵗʰ` day.

You want to maximize your profit by choosing a **single day** to buy one stock and choosing a
**different day in the future** to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit,
return `0`.

**Example 1:**

```
Input: prices = [7,5,3,6,4,1]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
```

**Example 2:**

```
Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.
```

**Constraints:**

- `1 <= prices.length <= 10⁵`
- `0 <= prices[i] <= 10⁴`

*/

// @lc code=begin

function maxProfit(prices: number[]): number {
  let minPrice = prices[0];
  let maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    const price = prices[i];
    const profit = price - minPrice;
    if (profit > maxProfit) {
      maxProfit = profit;
    }

    if (price < minPrice) {
      minPrice = price;
    }
  }

  return maxProfit;
}

// @lc code=end
