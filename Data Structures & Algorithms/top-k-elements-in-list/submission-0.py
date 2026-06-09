class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        highestNums = {}
        for num in nums:
            highestNums[num] = highestNums.get(num,0)+1
        bucket = [[] for i in range(len(nums) + 1)]
        for key, value in highestNums.items():
            bucket[value].append(key)
        result = []
        for i in range(len(nums),0,-1):
            result.extend(bucket[i])
            if len(result) == k:
                return result

