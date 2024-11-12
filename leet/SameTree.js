// https://leetcode.com/problems/same-tree/

class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val
        this.left = left
        this.right = right
    }
}

const p1 = new TreeNode(1, new TreeNode(2), new TreeNode(3))
const q1 = new TreeNode(1, new TreeNode(2), new TreeNode(3))

const p2 = new TreeNode(1, new TreeNode(2), null)
const q2 = new TreeNode(1, null, new TreeNode(2))

const p3 = new TreeNode(1, new TreeNode(2), new TreeNode(1))
const q3 = new TreeNode(1, new TreeNode(1), new TreeNode(2))

class Solution {
    sameTree(p, q) {
        if (!p && !q) return true
        if (!p || !q || p.val !== q.val) return false

        return this.sameTree(p.left, q.left) && this.sameTree(p.right, q.right)
    }
}

const solution = new Solution()

console.log(solution.sameTree(p1, q1))
console.log(solution.sameTree(p2, q2))
console.log(solution.sameTree(p3, q3))
