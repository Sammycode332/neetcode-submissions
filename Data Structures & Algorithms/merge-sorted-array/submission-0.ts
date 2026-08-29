class Solution {
    /**
     * @param {number[]} nums1
     * @param {number} m
     * @param {number[]} nums2
     * @param {number} n
     * @return {void} Do not return anything, modify nums1 in-place instead.
     */
    merge(nums1: number[], m: number, nums2: number[], n: number): void {
        let p1 = m-1
        let p2 = n-1
        let p3 = (m+n)-1
        while((p1>= 0) && p2 >= 0){
           if(nums2[p2] > nums1[p1]){
            nums1[p3] = nums2[p2]
            p2--
           }else{
            nums1[p3] = nums1[p1]
            p1--
           }
           p3--
        }
        for(let i=p2;i>=0;i--){
            nums1[p3]=nums2[i]
            p3--
        }
    }  
}
