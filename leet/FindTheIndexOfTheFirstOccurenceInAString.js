// https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/

class Solution {
    // O(n) time
    // O(1) space
    needlePosition(haystack, needle) {
        if (needle === "") return 0

        let l = 0

        for (let r = needle.length; r < haystack.length; r++) {
            const window = haystack.slice(l, r)

            if (window === needle) return l
            l++
        }
        return -1
    }

    needlePosition2(haystack, needle) {
        return haystack.indexOf(needle)
    }
}

const solution = new Solution()

console.log(solution.needlePosition("sadbutsad", "sad"))
console.log(solution.needlePosition("hello", "ll"))
console.log(solution.needlePosition("leetcode", "leeto"))
