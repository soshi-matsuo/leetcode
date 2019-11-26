class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        if not strs: return ""
        standard = strs[0]
        if len(strs) == 1: return standard
       
        min_border = 100
        for i in range(1, len(strs)):
            border = -1
            for j in range(1, len(standard) + 1):
                if standard[:j] == strs[i][:j]:
                    border = j
            if border == -1:
                return ""
            if min_border > border:
                min_border = border

        return standard[:min_border]
