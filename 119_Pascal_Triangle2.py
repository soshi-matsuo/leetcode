class Solution:
    def getRow(self, rowIndex: int) -> List[int]:
        triangle = []
        for i in range(rowIndex + 1):
            row = [None] * (i + 1)
            row[0], row[-1] = 1, 1
            for col in range(1, len(row) - 1):
                row[col] = triangle[i-1][col] + triangle[i-1][col-1]
            triangle.append(row)
        return triangle[rowIndex]
