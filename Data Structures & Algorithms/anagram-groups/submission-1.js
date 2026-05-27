class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const Anagrams = {}
        for(const word of strs){
            const key = word.split('').sort().join('')
            if(!Anagrams[key]){
                Anagrams[key]= []
            }
            Anagrams[key].push(word)      
        }
        return Object.values(Anagrams)
    }
}
