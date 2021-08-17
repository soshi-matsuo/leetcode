/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (!nums.length) return 0;

    let uniqueIdx = 0;
    for (let i=1; i<nums.length; i++) {
        if (nums[i] > nums[uniqueIdx]) {
            nums[uniqueIdx + 1] = nums[i];
            uniqueIdx++;
        }
    }
    return uniqueIdx + 1
};
