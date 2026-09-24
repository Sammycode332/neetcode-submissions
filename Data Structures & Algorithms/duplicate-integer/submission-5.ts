class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const numSet = new Set(nums)
        const has_duplicate = numSet.size< nums.length
        return has_duplicate
    }
}
