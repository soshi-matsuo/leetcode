from collections import defaultdict
class Solution:
    def findDiagonalOrder(self, matrix: List[List[int]]) -> List[int]:
        if not matrix: return []
        
        dd = defaultdict(list)
        for row in range(len(matrix)):
            for col in range(len(matrix[0])):
                dd[row+col].append(matrix[row][col])
        result = []
        for k, v in dd.items():
            if k % 2 == 0:
                v = v[::-1]
            result += v
        return result
