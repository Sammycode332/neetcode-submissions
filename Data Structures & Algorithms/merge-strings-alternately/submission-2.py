class Solution:
    def mergeAlternately(self, word1: str, word2: str) -> str:
        mergedString = []
        
        minLength = min(len(word1),len(word2))
        for i in range(minLength):
            mergedString.append(word1[i])
            mergedString.append(word2[i])

        mergedString.append(word1[minLength:])
        mergedString.append(word2[minLength:])
        
        return "".join(mergedString)
        