class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1: string, word2: string): string {
        let left = 0
        let joinedWord = "";
        while(left < word1.length || left < word2.length){
            if (left < word1.length){
                joinedWord +=word1[left]
            }
            if (left < word2.length){
                joinedWord +=word2[left]
            }
           left++
           
        }
        return joinedWord
    }
}   
