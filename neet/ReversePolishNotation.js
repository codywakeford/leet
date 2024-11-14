// https://neetcode.io/problems/evaluate-reverse-polish-notation

// TODO: again
class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let stack = []

        while (tokens.length > 0) {
            stack
            const current = tokens.shift()

            if (current === "*" || current === "+" || current === "-" || current === "/") {
                const firstNumber = Number(stack.pop())
                const secondNumber = Number(stack.pop())

                if (current === "*") {
                    stack.push(firstNumber * secondNumber)
                } else if (current === "+") {
                    stack.push(firstNumber + secondNumber)
                } else if (current === "-") {
                    stack.push(secondNumber - firstNumber)
                } else if (current === "/") {
                    stack.push(Math.trunc(secondNumber / firstNumber))
                }
            } else {
                stack.push(current)
            }
        }
        return stack.pop()
    }
}

const solution = new Solution()

console.log(solution.evalRPN(["1", "2", "+", "3", "*", "4", "-"]))
console.log(solution.evalRPN(["4", "13", "5", "/", "+"]))
