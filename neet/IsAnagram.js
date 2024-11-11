// https://neetcode.io/problems/is-anagram

// create an array of letters
// for each letter in the array
// go through and see if there is one in the other array

const s = "racecar"
const t = "carrace"

const s2 = "jar"
const t2 = "jam"

class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let array = Array.from(t)

        for (const letter of s) {
            if (array.includes(letter)) {
                array.splice(array.indexOf(letter), 1)
            } else {
                return false
            }
        }
        if (array.length > 0) return false

        return true
    }
}

const solution = new Solution()
console.log(solution.isAnagram(s, t))
console.log(solution.isAnagram(s2, t2))
