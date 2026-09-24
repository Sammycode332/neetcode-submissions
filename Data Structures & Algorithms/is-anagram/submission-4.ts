class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        let S: string = s
        let T: string = t

        let sortedS: string = S.split('').sort().join('')
        let sortedT: string = T.split('').sort().join('')

        let isAnagram = sortedS === sortedT

        return isAnagram

    }
}
