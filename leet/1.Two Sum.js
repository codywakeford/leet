// 1. Two sum
// https://leetcode.com/problems/two-sum/description/?envType=problem-list-v2&envId=hash-table

class Solution {
    // O(n^2) time
    bruteForce(numbers, target) {
        for (let i = 0; i < numbers.length; i++) {
            for (let pointer = i + 1; pointer < numbers.length; i++) {
                if (numbers[i] + numbers[pointer] === target) {
                    return [i, pointer]
                }
            }
        }
    }

    // O(n) time
    hash(numbers, target) {
        const hash = new Map()

        for (let i = 0; i < numbers.length; i++) {
            if (hash.has(target - numbers[i])) {
                return [hash.get(target - numbers[i]), i]
            }

            hash.set(numbers[i], i)
        }
    }
}

const solution = new Solution()

console.log(solution.bruteForce([2, 7, 11, 15], 9))
console.log(solution.bruteForce([3, 2, 4], 6))
console.log(solution.bruteForce([3, 3], 6))

console.log(solution.hash([3, 3], 6))
console.log(solution.hash([3, 2, 4], 6))
console.log(solution.hash([2, 7, 11, 15], 9))
