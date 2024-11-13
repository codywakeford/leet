// https://leetcode.com/problems/palindrome-number/description/

class Solution {
    isPalindrome(number) {
        const array = Array.from(String(number))
        let string = ""

        while (array.length > 0) {
            string += array.pop()
        }

        if (string === String(number)) return true

        return false
    }
}

const solution = new Solution()

console.log(solution.isPalindrome(121))
console.log(solution.isPalindrome(-121))
console.log(solution.isPalindrome(10))
console.log(solution.isPalindrome(1001))
