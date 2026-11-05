class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    validPalindrome(s: string): boolean {
        const cleaned = s.toLowerCase().replace(/[^a-z0-9]/g, '');

        let left = 0
        let right = cleaned.length-1

        while (left<right){
            if(cleaned[left]!==cleaned[right]){
               return this.isPalindromeRange(cleaned,left+1,right) ||
                this.isPalindromeRange(cleaned,left,right-1)
            }
            left++
            right--
        }
        return true

     }
     isPalindromeRange(cleaned:string,start:number,end:number){
        while(start<end){
            if(cleaned[start]!==cleaned[end]){
                return false
            }
             start++
        end--
        }
       return true
     }
     
}
