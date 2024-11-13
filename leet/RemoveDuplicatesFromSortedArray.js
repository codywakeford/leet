// https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/
// Remove duplicates IN PLACE and return number of unique values

class Solution {
    // O(n) time
    // O(1) space
    removeDuplicates(list) {
        let leftPointer = 1

        for (let i = 1; i < list.length; i++) {
            if (list[i] != list[i - 1]) {
                list[leftPointer] = list[i]
                leftPointer++
            }
        }
        return leftPointer
    }
}

const solution = new Solution()

console.log(solution.removeDuplicates([1, 1, 2]))
console.log(solution.removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]))
