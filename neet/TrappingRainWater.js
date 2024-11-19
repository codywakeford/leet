// https://neetcode.io/problems/trapping-rain-water

// Time: O(n)
// Space: O(2n)
class Solution {
    trappedWater(array) {
        let maxLeft = []
        let maxRight = []

        let max = 0
        for (let i = 0; i < array.length; i++) {
            max = i === 0 ? 0 : Math.max(array[i - 1], max)
            maxLeft[i] = max
        }

        max = 0
        for (let i = array.length - 1; i >= 0; i--) {
            max = i === array.length - 1 ? 0 : Math.max(array[i + 1], max)

            maxRight[i] = max
        }

        let water = 0
        for (let i = 0; i < array.length; i++) {
            let left = i === 0 ? 0 : maxLeft[i]
            let right = i === array.length - 1 ? 0 : maxRight[i]

            let pool = Math.min(left, right) - array[i]
            water += Math.max(pool, 0)
        }

        return water
    }
}

// calc maxLeft
// calc maXRight
// work out water at every value

const solution123 = new Solution()

console.log(solution123.trappedWater([0, 2, 0, 3, 1, 0, 1, 3, 2, 1]))
