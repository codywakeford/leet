// https://leetcode.com/problems/plus-one/

class Solution {
    // O(log(n)) time
    // O(1)
    plusOne(number) {
        for (let i = number.length - 1; i >= 0; i--) {
            if (number[i] === 9 && i === 0) {
                number[i] = 0
                number.unshift(1)
            } else if (number[i] === 9) {
                number[i] = 0
            } else {
                number[i] = number[i] + 1
                return number
            }
        }

        return number
    }
}

const solution = new Solution()

console.log(solution.plusOne([1, 2, 3]))
console.log(solution.plusOne([4, 3, 2, 1]))
console.log(solution.plusOne([9]))
console.log(solution.plusOne([9, 9, 9]))
