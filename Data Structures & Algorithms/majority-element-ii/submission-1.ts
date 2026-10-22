class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    majorityElement(nums: number[]): number[] {
        const counts: Record<number,number> = {}

        const countArray: number[] = []
        const repeatedNums = Number(nums.length/3)
        for(let i = 0;i<nums.length;i++){
            let num = nums[i]
            counts[num] =(counts[num]|| 0)+1


            if(!countArray.includes(num) && counts[num] > repeatedNums){
                countArray.push(num)
            }
        }
        return countArray
    }
}
