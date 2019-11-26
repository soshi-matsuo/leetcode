class Solution:
    def generate(self, numRows: int) -> List[List[int]]:
        triangle = []
        for row_num in range(numRows):
            print(row_num)
            row = [None for _ in range(row_num+1)]
            row[0], row[-1] = 1, 1
            # if row_num == 0, then range() return []
            # so no iteration happen
            for i in range(1, len(row)-1):
                print(row_num)
                row[i] = triangle[row_num-1][i-1] + triangle[row_num-1][i]
                
            triangle.append(row)
            
        return triangle
