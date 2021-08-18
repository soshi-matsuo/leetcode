/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let k = 0

    if (!nums.length) return k;

    for (let i=0; i<nums.length; i++) {
        if (nums[i] === val) {
            for (let j=i+1; j<nums.length; j++) {
                if (nums[j] !== val) {
                    [nums[i], nums[j]] = [nums[j], nums[i]];
                    k++;
                    break;
                }
            }
        } else {
            k++;
        }
    }
    return k;
    
    // 模範解答
    // if (!nums.length) return 0;
    // let i = 0
    // for (let j=0; j<nums.length; j++) {
    //     if (nums[j] !== val) {
    //         nums[i] = nums[j];
    //         i++;
    //     }
    // }
    // return i;
};
