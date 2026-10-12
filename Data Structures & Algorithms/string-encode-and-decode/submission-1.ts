class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        return strs.map((s)=>`${s.length}#${s}`).join('')
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        const result: string[] =[]
        let i=0;

        while(i<str.length){
            const hash = str.indexOf('#',i)
            const len = parseInt(str.slice(i,hash),10);
            const start = hash+1
            result.push(str.slice(start,start+len))
            i=start + len;
        }
        return result
    }
}
