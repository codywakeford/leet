// https://neetcode.io/problems/top-k-elements-in-list
const nums1 = [1, 2, 2, 3, 3, 3]
const k1 = 2

const nums2 = [7, 7]
const k2 = 1

class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const count = {}

        for (const number of nums) {
            count[number] = (count[number] || 0) + 1
        }

        // count

        const array = Object.entries(count).map(([number, freq]) => [freq, parseInt(number)])
        array.sort((a, b) => b[0] - a[0])
        array

        return array.slice(0, k).map((pair) => pair[1])
    }
}

const solution = new Solution()

console.log(solution.topKFrequent(nums1, k1))
// console.log(solution.topKFrequent(nums2, k2))
