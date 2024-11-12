// https://leetcode.com/problems/symmetric-tree/description/
// not finished.

class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val
        this.left = left
        this.right = right
    }
}

const root = new TreeNode(
    1,
    new TreeNode(2, new TreeNode(3), new TreeNode(4)),
    new TreeNode(2, new TreeNode(4), new TreeNode(3))
)

class Solution {
    symmetricTree(root) {
        const visited = new Set()
        let queue = [root]

        while (queue.length > 0) {
            let currentNode = queue[0]

            if (currentNode.left !== currentNode.right) return false

            if (!visited.has(root.right)) {
                queue.push(root.left)
            }

            if (!visited.has(root.left)) {
                queue.push(root.right)
            }

            visited.add(queue.shift())
        }

        return true
    }
}

const solution = new Solution()

console.log(solution.symmetricTree(root))
