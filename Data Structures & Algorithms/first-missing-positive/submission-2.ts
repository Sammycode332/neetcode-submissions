class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    firstMissingPositive(nums: number[]): number {
        for(let i = 0;i<nums.length;i++){
            while(true){
                let num = nums[i]

                if(num < 1 || num>nums.length){
                    break
                }
                let targetIndex = num-1

                if(nums[i]===nums[targetIndex]){
                    break
                }
                [nums[i],nums[targetIndex]] = [nums[targetIndex],nums[i]]
            }
      }
      for(let i = 0;i<nums.length;i++){
        if(nums[i]!== i+1){
            return i+1
        }
      }
      return nums.length+1
    }
}
