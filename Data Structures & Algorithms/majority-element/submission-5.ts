class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums: number[]): number {
        const obj: Record<number,number[]> = {}
        for(let i = 0;i<nums.length;i++){
            if(!obj[nums[i]]){
                obj[nums[i]] = []
            }
            obj[nums[i]].push(nums[i])
        }
        const highest = Object.entries(obj).reduce((max,current)=>{
        return current[1].length > max[1].length? current: max
        })[0]
        return Number(highest)
    }
}
