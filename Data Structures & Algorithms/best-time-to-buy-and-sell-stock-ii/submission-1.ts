class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let profit = 0
        for(let i = 0;i<prices.length;i++){
            if(prices[i]<prices[i+1]){
                let result = prices[i+1]-prices[i]
                profit+=result
            }

        }
        return profit
    }
}
