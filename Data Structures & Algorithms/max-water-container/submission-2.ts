class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        let left = 0
        let right = heights.length-1
        let highestArea =0
        while(left < right){
            let waterAmount = (right - left) * Math.min(heights[left],heights[right])
           if (waterAmount > highestArea){
            highestArea  = waterAmount
           }
           if(heights[left]<heights[right]){
            left++
           }else{
            right--
           }
        }
        return highestArea
    }
}
