class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const obj: Record<number,number[]> = {}
        for(let i = 0;i<nums.length;i++){
            const n = nums[i]
            if(!obj[n]){
                obj[n]= []
            }
            obj[n].push(n)
        }
        const frequentArray = Object.entries(obj).sort((a,b)=>b[1].length-a[1].length).slice(0,k).map(entry => Number(entry[0]))

        return frequentArray
    }
}
