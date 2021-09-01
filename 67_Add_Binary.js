/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let sum = '';
    let i = a.length - 1;
    let j = b.length - 1;
    let co = 0; // 繰り上がりの有無
    
    // 模範解答
    // while (i >= 0 || j >= 0 || co === 1) {
    //     let digit = co; // 各桁の和は繰り上がりの値で初期化出来る
    //     if (i >= 0) digit += parseInt(a[i]);
    //     if (j >= 0) digit += parseInt(b[j]);
    //     co = digit >= 2 ? 1 : 0;
    //     if (digit % 2 === 0) {
    //         sum = '0' + sum;
    //     } else {
    //         sum = '1' + sum;
    //     }
    //     i--;
    //     j--;
    // }
    // return sum;
    
    // 自力解答
    while (i >= 0 && j >= 0) {
        if (a[i] === '1' && b[j] === '1') {
            if (co) sum = '1' + sum;
            else sum = '0' + sum;
            co = 1;
        } else if (a[i] === '0' && b[j] === '0') {
            if (co) sum = '1' + sum;
            else sum = '0' + sum;
            co = 0;
        } else {
            if (co) sum = '0' + sum;
            else sum = '1' + sum;
        }
        i--;
        j--;
    }
    if (i !== j) { // a, bの桁数が異なっていた場合
        let k = i > j ? i : j;
        const c = i > j ? a : b;
        for (k; k >= 0; k--) {
            if (!co) return c.substring(0, k+1) + sum;
            if (c[k] === '1') {
                sum = '0' + sum;
            } else {
                sum = '1' + sum;
                co = 0;
            }
        }
    }
    if (co) sum = '1' + sum;
    return sum;
};
