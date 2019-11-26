class Solution(object):
    def spiralOrder(self, matrix):
        if not matrix: return []
        
        R, C = len(matrix), len(matrix[0])
        seen = [[False]*C for _ in range(R)]
        ans = []
        dire_row = [0, 1, 0, -1]
        dire_col = [1, 0, -1, 0]
        r, c, dire_idx = 0, 0, 0
        for _ in range(R*C):
            ans.append(matrix[r][c])
            seen[r][c] = True
            next_r = r + dire_row[dire_idx]
            next_c = c + dire_col[dire_idx]
            if (0 <= next_r < R and 0 <= next_c < C) and not seen[next_r][next_c]:
                r, c = next_r, next_c
            else:
                dire_idx = (dire_idx + 1) % 4
                r, c = r + dire_row[dire_idx], c + dire_col[dire_idx]
        return ans
