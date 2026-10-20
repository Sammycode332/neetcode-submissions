class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
        const rows: Set<string>[] =[]
        const cols: Set<string>[] =[]
        const boxes: Set<string>[] =[]

        for(let i=0;i<9;i++){
            rows.push(new Set<string>)
            cols.push(new Set<string>)
            boxes.push(new Set<string>)
        }
        for(let r = 0;r<9;r++){
            for(let c = 0;c<9;c++){
                const val = board[r][c]
                if(val === "."){
                    continue
                }
                const rowNumber = Math.floor(r/3)
                const colsNumber = Math.floor(c/3)
                const box = rowNumber*3 + colsNumber
                if(rows[r].has(val)|| cols[c].has(val)|| boxes[box].has(val)){
                    return false
                }
                rows[r].add(val)
                cols[c].add(val)
                boxes[box].add(val)
            }
        }
        return true
    }
}
