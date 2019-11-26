class Solution:
    def moveZeroes(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        i = 0
        loop = 0
        while loop < len(nums):
            if nums[i] == 0:
                nums.append(nums.pop(i))
            else:
                i += 1
            loop += 1
