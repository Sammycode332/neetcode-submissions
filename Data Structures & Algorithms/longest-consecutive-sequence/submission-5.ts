class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        const numbers = new Set(nums)
        let  startingnum = 0
        let longest = 0
        for(let i = 0;i<nums.length;i++){
            let num= nums[i]
            if(!numbers.has(num-1)){
                startingnum = num
                let index=0
                let counter = 0
                while(numbers.has(startingnum+ index)){
                    index++
                    counter++
                    longest = Math.max(longest,counter)
                }
            }
        }
        return longest
    }
}
