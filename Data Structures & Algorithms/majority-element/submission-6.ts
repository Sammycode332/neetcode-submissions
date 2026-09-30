class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums: number[]): number {
        const counts: Record<number,number> = {}
        let majorityNum = nums[0]
        let majorityCount = 0
        for(let i = 0;i<nums.length;i++){
            const n = nums[i]
            counts[n] = (counts[n] || 0) + 1
        
            if(counts[n]> majorityCount){
                majorityCount = counts[n]
                majorityNum = n 
            }
        }
        return majorityNum
    }
}
