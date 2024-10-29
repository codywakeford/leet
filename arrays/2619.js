// 2619. Array Prototype Last
// https://leetcode.com/problems/array-prototype-last/description/

const array = [1, 2, 3]

Array.prototype.last = function () {
	if (this.length === 0) return -1

	return this[this.length - 1]
}

console.log(array.last())
