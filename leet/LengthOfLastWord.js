// https://leetcode.com/problems/length-of-last-word/description/

class Solution {
    // O(log(n)) time
    // O(1)
    lengthOfLastWord(string) {
        let words = string.split(" ")
        words = words.filter((word) => word.trim() !== "")
        return words[words.length - 1].length
    }
}

const solution = new Solution()

console.log(solution.lengthOfLastWord("Hello World"))
console.log(solution.lengthOfLastWord("   fly me   to   the moon  "))
console.log(solution.lengthOfLastWord("luffy is still joyboy"))
