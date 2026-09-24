class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        let seen: Record<number,number> = {}
        for (let i = 0;i<=nums.length-1;i++){
            let needed_num = target - nums[i]
            if(seen[needed_num]!== undefined){
                return[seen[needed_num],i]
            }else{
                seen[nums[i]] = i
            }
        }
  }
}
