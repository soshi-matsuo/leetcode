/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let carryOver = true;
    for (let i = digits.length - 1; i >= 0; i--) {
        if (!carryOver) break;
        if (digits[i] === 9) digits[i] = 0;
        else {
            digits[i]++;
            carryOver = false;
        }
    }
    if (digits[0] === 0) {
        // so faster than inserting
        digits[0] = 1;
        digits.push(0);
    }
    return digits;
};
