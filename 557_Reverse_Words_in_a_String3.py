class Solution:
    def reverseWords(self, s: str) -> str:
        s_array = s.split()
        result = []
        for e in s_array:
            result.append(e[::-1])
        return ' '.join(result)
