class MyHashMap {
    private map:Record<number,number> = {}
    constructor() {
        this.map = {}
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key: number, value: number): void {
        this.map[key] = value
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key: number): number {
        return key in this.map ? this.map[key] : -1
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key: number): void {
        delete this.map[key]
    }
}

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
