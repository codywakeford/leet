// https://neetcode.io/problems/is-palindrome

class Solution {
    /**
     * @param {string} string
     * @return {boolean}
     */
    isPalindrome(string) {
        string = string.toLowerCase()
        string = string.replace(/[^a-z0-9]/g, "")

        return string === string.split("").reverse().join("")
    }

    isAlphanumeric(char) {
        return (
            (char >= "a" && char <= "z") ||
            (char >= "A" && char <= "Z") ||
            (char >= "0" && char <= "9")
        )
    }
}

const solution = new Solution()
console.log(solution.isPalindrome("Was it a car or a cat I saw?"))
console.log(solution.isPalindrome("racecar!!@@@"))
console.log(solution.isPalindrome("2fasawf"))
