class Solution:
    def hasDuplicate(self, nums: List[int]) -> bool:
       has_duplicates = len(set(nums)) < len(nums)
       return has_duplicates