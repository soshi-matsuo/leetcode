class Solution:
    def findMaxConsecutiveOnes(self, nums: List[int]) -> int:
        max_con = 0
        con = 0
        for num in nums:
            if num == 1: 
                con += 1
                if max_con < con:
                    max_con = con
            else: 
                con = 0
        return max_con
