class Solution:
    def addBinary(self, a: str, b: str) -> str:
        dec_a = int('0b' + a, 0)
        dec_b = int('0b' + b, 0)
        dec_ans = dec_a + dec_b
        bin_ans = str(bin(dec_ans))
        return bin_ans[2:]
