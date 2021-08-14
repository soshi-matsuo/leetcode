/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length === 1) return strs[0];
    else {
        const first = strs.shift();
        const rest = longestCommonPrefix(strs);
        // firstとrestの共通部分算出
        let common = '';
        for (let i = 0; i < rest.length; i++) {
            if (first[i] === rest[i]) common += rest[i];
            else break;
        }
        return common;
    }
};


