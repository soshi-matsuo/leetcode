/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let low = 0;
    let high = x;
    while (low <= high) {
        const mid = Math.trunc(low + (high - low) / 2);
        const pow = mid * mid;
        if (pow === x) return mid;
        else if (pow > x) high = mid - 1;
        else low = mid + 1;
    }
    return high;
};
