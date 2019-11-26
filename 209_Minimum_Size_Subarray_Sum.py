class Solution:
    def minSubArrayLen(self, s: int, nums: List[int]) -> int:
        com_sum = 0
        left = 0
        ans = 100000
        for i in range(len(nums)):
            com_sum += nums[i]
            while com_sum >= s:
                ans = min(ans, i + 1 - left)
                com_sum -= nums[left]
                left += 1
        return ans if not ans == 100000 else 0
