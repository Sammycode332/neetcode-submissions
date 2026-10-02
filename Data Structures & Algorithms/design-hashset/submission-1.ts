class MyHashSet {
    private boxes: number[][] = []
    constructor() {
         this.boxes =Array.from({length:10},()=> [])
    }
    
    /**
     * @param {number} key
     * @return {void}
     */
    add(key: number): void {
        const boxIndex = key % this.boxes.length
        if(this.boxes[boxIndex].includes(key)){
            return
        }
        this.boxes[boxIndex].push(key)
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key: number): void {
    const boxIndex = key % this.boxes.length
    const keyPosition = this.boxes[boxIndex].indexOf(key)
    if (keyPosition === -1) {
        return
    }
    this.boxes[boxIndex].splice(keyPosition, 1)
}
    /**
     * @param {number} key
     * @return {boolean}
     */
    contains(key: number): boolean {
        const boxIndex = key % this.boxes.length
        return this.boxes[boxIndex].includes(key)
    }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
