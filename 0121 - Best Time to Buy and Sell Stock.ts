function maxProfit(prices: number[]): number {
    let buyPrice = Infinity;
    let sellPrice = -Infinity;
    let profit = -Infinity;

    for (const price of prices) {
        if (price < buyPrice) {
            buyPrice = price;
            sellPrice = -Infinity;
        }

        if (price > sellPrice) {
            sellPrice = price;
        }

        profit = Math.max(profit, sellPrice - buyPrice);
        console.log(buyPrice, sellPrice, profit)
    }
    return profit;
};
