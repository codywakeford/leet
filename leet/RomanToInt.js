// https://leetcode.com/problems/roman-to-integer/description/

class Solution {
    // O(n) time
    // O(n) space
    romanToInt(number) {
        const array = Array.from(number)

        let total = 0
        for (let i = 0; i < array.length; i++) {
            const current = this.romanToNumber(array[i])

            let next = 0
            if (i < array.length - 1) {
                next = this.romanToNumber(array[i + 1])
            }

            if (current < next) total -= current
            if (current >= next) total += current
        }

        return total
    }

    romanToNumber(letter) {
        switch (letter) {
            case "I":
                return 1

            case "V":
                return 5

            case "X":
                return 10

            case "L":
                return 50

            case "C":
                return 100

            case "D":
                return 500

            case "M":
                return 1000

            default:
                throw new Error("Number not found")
        }
    }
}

const solution = new Solution()

console.log(solution.romanToInt("III"))
console.log(solution.romanToInt("LVIII"))
console.log(solution.romanToInt("MCMXCIV"))
