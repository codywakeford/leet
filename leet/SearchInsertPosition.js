// https://leetcode.com/problems/search-insert-position/description/

class Solution {
    // O(log(n)) time
    // O(1)
    searchInsert(array, target) {
        let l = 0
        let r = array.length - 1

        while (l <= r) {
            let m = Math.floor((l + r) / 2)

            if (array[m] === target) return m

            if (target > array[m]) {
                l = m + 1
            } else {
                r = m - 1
            }
        }

        return l
    }
}

const solution = new Solution()

console.log(solution.searchInsert([1, 3, 5, 6], 5))
console.log(solution.searchInsert([1, 3, 5, 6], 2))
console.log(solution.searchInsert([1, 3, 5, 6], 7))
