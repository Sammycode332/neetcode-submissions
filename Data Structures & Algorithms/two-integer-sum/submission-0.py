class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        seen = {}
        for i,currentnum in enumerate(nums):
            needed_num = target-currentnum
            if needed_num in seen:
                return[seen[needed_num],i]
            seen[currentnum] = i
        return[]
        