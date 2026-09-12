class Solution {
    /**
     * @param {number[]} people
     * @param {number} limit
     * @return {number}
     */
    numRescueBoats(people: number[], limit: number): number {
       people.sort((a,b)=>a-b)
       let left = 0
       let right = people.length-1
       let counter = 0

       while(left<=right){
        if(people[left] + people[right] <= limit){
            counter++
            left++
            right--
        }
        else{
            counter++
            right--
        }
       }
       return counter
    }
}
