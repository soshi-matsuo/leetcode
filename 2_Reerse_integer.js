/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const MAX = Math.pow(2, 31) - 1;
    const MIN = Math.pow(-2, 31);
        
    // get each digit
    const digits = [];
    while (x !== 0) {
        digits.push(x % 10);
        x = x / 10 | 0;
    }
    
    // sum up digits
    let sum = 0;
    const numOfDigits = digits.length;
    for (let i = 1; i <= numOfDigits; i++) {
        sum += digits[i-1] * 10 ** (numOfDigits - i);
    }
    
    // return result
    if (sum < MIN || sum > MAX) return 0;
    return sum;
    
};
