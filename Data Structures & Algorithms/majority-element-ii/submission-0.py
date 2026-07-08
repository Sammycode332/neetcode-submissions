class Solution:
    def majorityElement(self, nums: List[int]) -> List[int]:
        counts = Counter(nums)
        majorityElement = []
        for value in counts:
            if(counts[value] > math.floor(len(nums)/3)):
                majorityElement.append(value)
            
        return majorityElement;
        