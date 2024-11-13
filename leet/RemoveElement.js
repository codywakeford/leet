// https://leetcode.com/problems/remove-element/

class Solution {
    // O(n) time
    // O(1) space
    removeElement(list, value) {
        let counter = 0
        let length = list.length

        for (let p = 0; p < list.length; p++) {
            if (list[p] === value) {
                list.splice(p, 1)
                counter++
            }
        }

        return length - counter
    }
}

const solution = new Solution()

console.log(solution.removeElement([3, 2, 2, 3], 3))
console.log(solution.removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2))
