class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums: number[], k: number): number {
        let balance = 0
        let total = 0
        
        const map = {0:1}
        for(let i = 0;i<nums.length;i++){
            balance+=nums[i]
            if(map[balance-k]!== undefined){
                total += map[balance-k]
            }
            if(map[balance]===undefined){
                map[balance] = 1
            }else{
                map[balance]+=1
            }
        } 
        return total 
    }
}
