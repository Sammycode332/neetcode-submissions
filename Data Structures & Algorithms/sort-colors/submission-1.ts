class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums: number[]): void {
        for(let i = 0;i<nums.length;i++){
            let j=i
            while(j>0&&nums[j-1]>nums[j]){
                [nums[j-1],nums[j]] = [nums[j],nums[j-1]]
                j-=1
            }
        }
    }
}
