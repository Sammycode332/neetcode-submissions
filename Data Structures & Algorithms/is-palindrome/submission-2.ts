class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
      let left = 0;
      const cleaned = s.toLowerCase().replace(/[^a-z0-9]/g, '');
      let right = cleaned.length - 1;

      while (left < right){

        if (cleaned[left] !== cleaned[right]){
        return false
        } else {
           left++;
           right--;
       }
     }
    return true;
}
}