/**
 * @param {number} n
 * @return {number}
 */
// const memo = {};

// var climbStairs = function(n) {
    // basic case
//    if (n <= 3) return n;

    // recursive case
//    if (memo[n]) return memo[n];
//    const steps = climbStairs(n - 1) + climbStairs(n - 2);
//    memo[n] = steps;
//    return steps;
//};

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    // basic case
    if (n <= 3) return n;
    
    const memo = new Array(n+1);
    memo[0] = 0;
    memo[1] = 1;
    memo[2] = 2;
    memo[3] = 3;
    for (let i = 4; i <= n; i++) {
        memo[i] = memo[i-1] + memo[i-2];
    }
    return memo[n];
};
