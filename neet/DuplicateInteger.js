// https://neetcode.io/problems/duplicate-integer

const nums1 = [1, 2, 3, 4]
const nums2 = [1, 2, 3, 3]

class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        for (let i = 0; i < nums.length; i++) {
            const number = nums[i]

            const numbers = [...nums]
            numbers.splice(i, 1)
            console.log(numbers)
            if (numbers.includes(number)) return true
        }
        return false
    }
}

const solution = new Solution()

console.log(solution.hasDuplicate(nums2))
