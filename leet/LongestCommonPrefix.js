// https://leetcode.com/problems/longest-common-prefix/

class Solution {
    // O(numberOfStrings * longestStringLength) time
    // O() space
    longestCommonPrefix(strings) {
        let prefix = ""

        for (let i = 0; i < strings[0].length; i++) {
            for (let string of strings) {
                if (i === string.length || string[i] !== strings[0][i]) return prefix
            }
            prefix += strings[0][i]
        }

        return prefix
    }
}

const solution = new Solution()

console.log(
    solution.longestCommonPrefix(["flower", "flow", "flight"]),
    solution.longestCommonPrefix(["dog", "racecar", "car"])
)
