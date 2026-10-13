class NumMatrix {
    /**
     * @param {number[][]} matrix
     */
    private table: number[][] 
    
    constructor(matrix: number[][]) {
        const rows = matrix.length
        const cols = matrix[0].length

        this.table = Array.from({length: rows+1},()=>Array(cols+1).fill(0));
        for(let r = 0;r<rows;r++){
            let rowTotal = 0;
            for(let c= 0;c<cols;c++){
                rowTotal+=matrix[r][c];
                this.table[r+1][c+1] = rowTotal + this.table[r][c+1]
            }
        }
    }


    /**
     * @param {number} row1
     * @param {number} col1
     * @param {number} row2
     * @param {number} col2
emmm     */
    sumRegion(row1: number, col1: number, row2: number, col2: number): number {
        return (
            this.table[row2+1][col2+1]
            -this.table[row1][col2+1]
            -this.table[row2+1][col1]
            +this.table[row1][col1]
        )
    }
}

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
