// 2619. Array Prototype Last
// https://leetcode.com/problems/array-prototype-last/description/

const array = [1, 2, 3]

Array.prototype.last = function () {
	if (this.length === 0) return -1

	return this[this.length - 1]
}

// Test cases
function runTests() {
	// Helper function for assertions
	function assertEqual(actual, expected, description) {
		if (actual === expected) {
			console.log(`✅ ${description}`)
		} else {
			console.error(`❌ ${description}: Expected ${expected}, but got ${actual}`)
		}
	}

	// Test with a non-empty array
	assertEqual([1, 2, 3].last(), 3, "Should return the last element of a non-empty array")

	// Test with a single-element array
	assertEqual([10].last(), 10, "Should return the only element in a single-element array")

	// Test with an empty array
	assertEqual([].last(), -1, "Should return -1 for an empty array")

	// Test with a different type of element
	assertEqual(
		["apple", "banana", "cherry"].last(),
		"cherry",
		"Should return the last string element in a string array",
	)

	// Test with a larger array
	assertEqual(
		[1, 2, 3, 4, 5, 6, 7, 8, 9].last(),
		9,
		"Should return the last element in a large array",
	)
}

// Run the tests
runTests()
