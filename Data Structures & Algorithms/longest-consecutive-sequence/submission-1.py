class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        numbers = set(nums)
        startingNum = 0
        longest = 0
        for num in numbers:
            if(num - 1) not in numbers:
                startingNum = num
                counter = 0
                index = 0
                while(startingNum + index) in numbers:
                    index+=1
                    counter+=1
                    longest = max(longest,counter)
        return longest

            

