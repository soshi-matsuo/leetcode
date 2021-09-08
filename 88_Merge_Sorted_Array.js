/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    // merging from last elements
    let last = m + n - 1;
    let i = m - 1;
    let j = n - 1;
    while (i >= 0 && j >= 0) {
        nums1[last--] = nums1[i] > nums2[j] ? nums1[i--] : nums2[j--];
    }
    while (j >= 0) {
        nums1[last--] = nums2[j--];
    }
    
    // merge, quick sort, overwrite
    // if (n === 0) return;
    // for (let i = 0; i < n; i++) nums1[m+i] = nums2[i];
    // if (m === 0) return;
    // const result = qsort(nums1);
    // for (let j = 0; j < m + n; j++) nums1[j] = result[j];
};

// const qsort = (arr) => {
//     if (arr.length <= 1) return arr;
//     const pivotIdx = Math.trunc(arr.length / 2);
//     const pivot = arr[pivotIdx];
//     const left = [];
//     const right = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (i === pivotIdx) continue;
//         if (pivot >= arr[i]) left.push(arr[i]);
//         else right.push(arr[i]);
//     }
//     return [...qsort(left), pivot, ...qsort(right)];
// };
