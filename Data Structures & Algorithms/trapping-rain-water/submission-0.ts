class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height: number[]): number {
        let left = 0
        let right = height.length-1
        let leftMax = 0
        let rightMax = 0
        let total = 0
        while(left<=right){
            if(height[left] < height[right]){
                if(leftMax < height[left]){
                  leftMax = height[left]  
                }
                total += leftMax-height[left]
                left++
            }else if(height[left]>height[right]){
                if(rightMax < height[right]){
                  rightMax = height[right]  
                }
                total += rightMax-height[right]
                right--
            }else{
                leftMax = height[left]  
                total += leftMax-height[left]
                left++
            }
        }
        return total
    }
}
