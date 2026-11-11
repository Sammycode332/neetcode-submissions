class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][] {
        const result: number[][] = []
        const seen = new Set<string>()
       nums.sort((a,b) =>a-b)
       for(let i = 0;i<nums.length;i++){
         let left = i+1
         let right = nums.length-1
         
         while(left < right){
            const sum = nums[i] + nums[left] + nums[right]
            let triplet = [nums[i],nums[left],nums[right]]
            const key = triplet.join(",")
            if(sum === 0){
                if(!seen.has(key)){
                   result.push(triplet)
                   seen.add(key)
                }
            
            left++
            right--
         }else if(sum<0){
            left ++
         }else{
            right--
         }
         }
       }
       return result
   }
}
