class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        if not nums: return 0
        
        count = 1
        pre = nums[0]
        for i in range(1, len(nums)):
            if nums[i] != pre:
                nums[count] = nums[i]
                count += 1
        return count
