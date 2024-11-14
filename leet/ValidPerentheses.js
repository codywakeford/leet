// https://leetcode.com/problems/valid-parentheses/

class Solution {
    // O(n) time
    // O(?) space
    isValid(strings) {
        let stack = []

        const parentheses = {
            "(": ")",
            "[": "]",
            "{": "}",
        }

        for (let char of strings) {
            if (parentheses[char]) {
                stack.push(parentheses[char])
            } else {
                if (stack.pop() !== char) return false
            }
        }
        if (stack.length) return false // check for unclosed

        return true
    }
}

const solution = new Solution()

console.log(solution.isValid("()"))
console.log(solution.isValid("()[]{}"))
console.log(solution.isValid("(]"))
console.log(solution.isValid("([])"))
