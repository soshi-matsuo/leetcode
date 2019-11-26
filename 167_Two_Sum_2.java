class Solution {
    public int[] twoSum(int[] numbers, int target) {
        int i = 0;
        int j = numbers.length - 1;
        while (true) {
            int two_sum = numbers[i] + numbers[j];
            if (target > two_sum) {
                i++;
            } else if (target < two_sum) {
                j--;
            } else {
                int[] result = {i+1, j+1};
                return result;
            }
        }
    }
}
