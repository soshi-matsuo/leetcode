class Solution:
    def rotate(self, nums: List[int], k: int) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        
        def p_reverse(array, start, end):
            while start < end:
                array[start], array[end] = array[end], array[start]
                start += 1
                end -= 1

        k %= len(nums)
        if len(nums) != 1 and k != 0:
            p_reverse(nums, 0, len(nums) - 1)
            p_reverse(nums, 0, k - 1)
            p_reverse(nums, k, len(nums) - 1)
            
        print(nums)
