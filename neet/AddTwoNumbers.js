class ListNode {
    constructor(val = 0, next = null) {
        this.val = val
        this.next = next
    }
}

const l1 = new ListNode(1, new ListNode(2, new ListNode(3)))
const l2 = new ListNode(4, new ListNode(5, new ListNode(6)))

class Solution {
    /**
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        // get the numbers
        // reverse the list

        // work out sum
        // regenerate into new linked list

        // aproach 2
        // iterate throug both lists together.
        // get the number sum

        let p1 = l1
        let p2 = l2

        let multiplyer = 1

        let total1 = 0
        let total2 = 0

        while (p1 !== null) {
            total1 += p1.val * multiplyer
            total2 += p2.val * multiplyer

            p1 = p1.next
            p2 = p2.next

            multiplyer *= 10
        }

        total1
        total2

        const total = Array.from(String(total1 + total2)).reverse()

        let newHead = new ListNode()
        p1 = newHead

        for (let i = 0; i < total.length; i++) {
            console.log(total[i])
            p1.val = total[i]

            if (i === total.length - 1) continue
            p1.next = new ListNode()
            p1 = p1.next
        }

        return newHead
    }
}

const solution = new Solution()

console.log(solution.addTwoNumbers(l1, l2))
