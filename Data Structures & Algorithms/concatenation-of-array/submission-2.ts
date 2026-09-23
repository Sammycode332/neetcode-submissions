class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums: number[]): number[] {
        let nums2 = [...nums]
        const merged = [...nums,...nums2]
        return merged
    }
}
