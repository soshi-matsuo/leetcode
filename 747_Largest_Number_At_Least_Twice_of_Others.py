class Solution:
    def dominantIndex(self, nums: List[int]) -> int:
        if len(nums) == 1: return 0
        
        largest = max(nums)
        nums_cp = nums[:]
        nums_cp.remove(largest)
        largest_2 = max(nums_cp)
        if largest >= (largest_2 * 2):
            return nums.index(largest)
        return -1
