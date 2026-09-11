class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        let left = 0
        let right = heights.length-1
         let amount =  0
        while(left < right){      
            let currentArea =   (right - left) * Math.min(heights[left], heights[right])
           if(currentArea > amount){
            amount = currentArea
           }
           if (heights[left] < heights[right]) {
                left++
            } else {
                right--
            }

        }
       return amount
    }
}
