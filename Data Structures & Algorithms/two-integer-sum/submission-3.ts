class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        for(let i = 0;i<nums.length-1;i++){
            let p2 = i+1
            while(p2<= nums.length-1){
                if(nums[i]+nums[p2] === target){
                    return[i,p2]
                }else{
                    p2++
                }
            }
        }
    }
}
