// https://leetcode.com/problems/merge-two-sorted-lists/

class ListNode {
    constructor(val, next) {
        this.val = val === undefined ? 0 : val
        this.next = next === undefined ? null : next
    }
}
const list1 = new ListNode(1, new ListNode(2, new ListNode(4, null)))
const list2 = new ListNode(1, new ListNode(3, new ListNode(4, null)))

const list3 = new ListNode()
const list4 = new ListNode(0)

class Solution {
    // O() time
    // O() space
    mergeTwoLists(list1, list2) {
        const dummy = new ListNode()
        let tail = dummy

        while (list1 && list2) {
            if (list1.val > list2.val) {
                tail.next = list1
                list1 = list1.next
            } else {
                tail.next = list2
                list2 = list2.next
            }

            tail = tail.next
        }

        if (list1) tail.next = list1
        else if (list2) tail.next = list2

        return dummy.next
    }
}

const solution = new Solution()

console.log(solution.mergeTwoLists(list1, list2))
console.log(solution.mergeTwoLists(list3, list3))
console.log(solution.mergeTwoLists(list3, list4))
