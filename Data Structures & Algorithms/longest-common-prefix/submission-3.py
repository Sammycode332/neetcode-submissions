class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        prefix = ""
        for i in range(len(strs[0])):
            found = True
            for words in strs:
                if i >= len(words):
                    found = False
                    break
                if words[i] != strs[0][i]:
                    found=False
                    break
            if not found:
                 break
            else:
                prefix += strs[0][i]
        return prefix;