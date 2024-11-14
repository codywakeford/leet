// https://neetcode.io/problems/longest-consecutive-sequence

// TODO: again
class Solution {
    consecutiveArray(nums) {
        let res = 0
        const store = new Set(nums)

        for (let num of nums) {
            let streak = 0,
                curr = num
            while (store.has(curr)) {
                streak++
                curr++
            }
            res = Math.max(res, streak)
        }
        return res
    }
}

const solution = new Solution()

console.log(solution.consecutiveArray([2, 20, 4, 10, 3, 4, 5]))
console.log(solution.consecutiveArray([0, 3, 2, 5, 4, 6, 1, 1]))
