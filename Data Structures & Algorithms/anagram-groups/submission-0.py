class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        Anagrams = {}
        for word in strs:
            key = "".join(sorted(word))
            if key not in Anagrams:
                Anagrams[key]= [];
            Anagrams[key].append(word)
        return list(Anagrams.values())

        
