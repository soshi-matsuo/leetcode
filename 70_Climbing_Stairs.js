/**
 * @param {number} n
 * @return {number}
 */
const memo = {};

var climbStairs = function(n) {
    // basic case
    if (n <= 3) return n;

    // recursive case
    if (memo[n]) return memo[n];
    const steps = climbStairs(n - 1) + climbStairs(n - 2);
    memo[n] = steps;
    return steps;
};
