/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let low = 0;
    let high = nums.length - 1;
    
    while (low <= high) {
        let mid = (low + high) % 2 === 0 ? (low+high) / 2 : (low+high) / 2 - 0.5;
        if (nums[mid] > target) {
            high = mid-1;
        } else if (nums[mid] < target) {
            low = mid+1;
        } else {
            return mid;
        }
    }
    // 前提：以下はnums中にtargetが見つからずループが終了した場合で、このとき必ずlow === high+1になっている
    // 1.targetがnums中で最小の場合、解答は0(lowの初期値)になり、最大の場合、解答はnums.length(highの初期値+1)になる
    // 2.1から、targetが挿入されるindexの範囲は、[low, high+1]だと一般化出来る
    // 3.前提と2から、この時点でtargetを挿入可能なindexの範囲は[low, low]だと言える
    // 4.よってループ終了時のlowは、targetがどこに挿入されるかに関わらず解答として正しくなる
    return low;
};
