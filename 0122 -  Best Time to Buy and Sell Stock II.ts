function maxProfit(prices: number[]): number {
    let profit = 0;

    for (let i = 0; i < prices.length; i++) {
        const previousPrice = prices[i - 1];
        const currentPrice = prices[i];
        const currentProfit = currentPrice - previousPrice;

        if (currentProfit > 0) {
            profit += currentProfit;
        }
    }

    return profit;
};

