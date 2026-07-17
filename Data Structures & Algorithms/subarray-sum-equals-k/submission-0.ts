class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums: number[], k: number): number {
        let currSum = 0;
        const map = {0:1}
        let answer = 0
        for(let i = 0; i<nums.length;i++){
            currSum += nums[i]
            if(map[currSum-k]!== undefined){
                answer+=map[currSum-k]
            }
            if(map[currSum] === undefined){
                map[currSum] =1;
            }else{
                map[currSum]+=1;
            }
        }
        return answer
    }
}
