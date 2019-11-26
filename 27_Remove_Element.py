class Solution:
    def removeElement(self, nums: List[int], val: int) -> int:
        new_len = 0
        for num in nums:
            if num != val:
                nums[new_len] = num
                new_len += 1
        return new_len
