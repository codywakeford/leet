// https://neetcode.io/problems/anagram-groups

const strs = ["act", "pots", "tops", "cat", "stop", "hat"]
const strs2 = ["x"]
const strs3 = [""]

class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let res = {}

        for (let string of strs) {
            const count = new Array(26).fill(0)

            for (let char of string) {
                count[char.charCodeAt(0) - "a".charCodeAt(0)]++
            }

            const key = count.join("#")

            if (!res[key]) {
                res[key] = []
            }
            res[key].push(string)
        }

        return Object.values(res)
    }
}

const solution = new Solution()

console.log(solution.groupAnagrams(strs))
console.log(solution.groupAnagrams(strs2))
console.log(solution.groupAnagrams(strs3))
