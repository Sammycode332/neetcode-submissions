class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        best_num =None
        best_count = 0
        for num in nums:
           if nums.count(num)> best_count:
                best_count = nums.count(num)
                best_num = num
        return  best_num

        