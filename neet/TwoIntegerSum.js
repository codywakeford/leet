// https://neetcode.io/problems/two-integer-sum

const numbers1 = [3, 4, 5, 6]
const target1 = 7

const numbers2 = [4, 5, 6]
const target2 = 10

const numbers3 = [5, 5]
const target3 = 10

class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let pointer = 0

        // O(n^2)
        while (pointer < nums.length) {
            for (let number of nums) {
                if (nums.indexOf(number) === pointer) continue

                if (nums[pointer] + number === target) {
                    return [pointer, nums.indexOf(number)]
                }
            }
            pointer++
        }
    }

    // O(n)
    twoSumHash(nums, target) {
        const hash = new Set()

        for (let i = 0; i < nums.length; i++) {
            if (hash.has(target - nums[i])) {
                return [nums.indexOf(target - nums[i]), i]
            }

            hash.add(nums[i])
        }
    }
}

const solution = new Solution()
console.log(solution.twoSum(numbers1, target1))
console.log(solution.twoSum(numbers2, target2))
console.log(solution.twoSum(numbers3, target3))

console.log(solution.twoSumHash(numbers1, target1))
console.log(solution.twoSumHash(numbers2, target2))
console.log(solution.twoSumHash(numbers3, target3))
