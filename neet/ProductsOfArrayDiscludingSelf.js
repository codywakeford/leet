// https://neetcode.io/problems/products-of-array-discluding-self

const nums1 = [1, 2, 3, 4]
const nums2 = [-1, 0, 1, 2, 3]

class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    // O(n)
    productExceptSelf(nums) {
        let prefix = []
        let suffix = []
        let result = []

        let value = 1
        for (let i = 0; i < nums.length; i++) {
            prefix[i] = value * nums[i]
            value = value * nums[i]
        }

        value = 1
        for (let i = nums.length - 1; i >= 0; i--) {
            suffix[i] = value * nums[i]
            value = value * nums[i]
        }

        prefix
        suffix

        for (let i = 0; i < nums.length; i++) {
            i
            let pre = i === 0 ? 1 : prefix[i - 1]
            let suf = i === nums.length - 1 ? 1 : suffix[i + 1]

            result[i] = pre * suf
        }

        return result
    }
}

const solution = new Solution()

console.log(solution.productExceptSelf(nums1))
