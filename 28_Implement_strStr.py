class Solution:
    def strStr(self, haystack: str, needle: str) -> int:
        for i in range(len(haystack) - len(needle) + 1):
            if needle == haystack[i:i+len(needle)]: 
                return i
        if not needle: return 0
        return -1
