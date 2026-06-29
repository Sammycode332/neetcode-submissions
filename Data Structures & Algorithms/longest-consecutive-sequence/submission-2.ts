class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        const numbers = new Set(nums)
        let startingNum = 0
        let longest = 0
        for(let i=0;i<=nums.length;i++){
            let num = nums[i]
            if(!numbers.has(num-1)){
                startingNum = num
                let counter = 0
                let index = 0
                while(numbers.has(startingNum + index)){
                    index++
                    counter++
                    longest = Math.max(longest,counter)
                }
            }
        }
        return longest
    }
}
