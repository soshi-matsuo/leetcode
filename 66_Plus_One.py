class Solution:
    def plusOne(self, digits: List[int]) -> List[int]:
        digits_int = int(''.join([str(digit) for digit in digits]))
        digits_int += 1
        result = [int(digit_int) for digit_int in str(digits_int)]
        return result
