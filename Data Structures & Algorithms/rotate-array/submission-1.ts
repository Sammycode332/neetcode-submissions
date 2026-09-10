class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    rotate(nums: number[], k: number): void {
        k = k % nums.length     
        let result: number[] = []
        
        for(let i = 0; i < nums.length; i++){
            result[i] = nums[(i - k + nums.length) % nums.length]
        }
        
        for(let i = 0; i < nums.length; i++){
            nums[i] = result[i]
        }
    }
}
