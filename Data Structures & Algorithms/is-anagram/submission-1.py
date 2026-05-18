class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        letters1 = []
        letters2 =[]
        for string in s:
            letters1.append(string)
        print(letters1)
        for string2 in t:
           letters2.append(string2)
        print(letters2)
        if sorted(letters1) == sorted(letters2):
            return True;
        else:
            return False
