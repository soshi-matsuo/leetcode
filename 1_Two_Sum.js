/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const idx = map.get(target - nums[i]);
        if (idx !== undefined) return [idx, i];
        map.set(nums[i], i);
    }
};
