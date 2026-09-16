class Solution {
    containsNearbyDuplicate(nums: number[], k: number): boolean {
        let seen = new Map<number, number>()

        for (let i = 0; i < nums.length; i++) {
            if (seen.has(nums[i])) {
                let previousIndex = seen.get(nums[i])!
                if (i - previousIndex <= k) {
                    return true
                }
            }
            seen.set(nums[i], i)
        }

        return false
    }
}