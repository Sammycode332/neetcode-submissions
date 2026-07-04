class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        let left = 0;
        let right = s.length - 1;
        
        // One main loop to control the entire journey
        while (left < right) {
            
            // 1. Skip non-alphanumeric characters from the left
            if (!this.isAlphanumeric(s[left])) {
                left++;
            } 
            else if(!this.isAlphanumeric(s[right])){
                right--;
            } 
            else{
                if (s[left].toLowerCase() !== s[right].toLowerCase()) {
                    return false;
                }
                left++;
                right--;
            }
        }
        
        return true;
    }

    // (Assuming your helper method looks something like this)
    isAlphanumeric(char: string): boolean {
        return /^[a-zA-Z0-9]$/.test(char);
    }
}