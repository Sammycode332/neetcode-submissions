class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let minPriceSoFar = prices[0]
        let maxProfit =0 
        for(let i= 0;i<=prices.length;i++){
            let todayProfit = prices[i] - minPriceSoFar
            if (todayProfit > maxProfit){
                maxProfit = todayProfit
            }
            if (prices[i] < minPriceSoFar){
                minPriceSoFar = prices[i]
            }
        }
        return maxProfit
    }
}
