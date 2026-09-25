class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const seen: Record<string,string[]> = {}
        for(const str of strs){
            const key = str.split('').sort().join('')

            if(!seen[key]){
                seen[key] = []
            }
            seen[key].push(str)
        }
        //learnt this to convert object to an array
        return Object.values(seen)
    }
}
