// 1. Two sum
// https://leetcode.com/problems/two-sum/description/?envType=problem-list-v2&envId=hash-table

function twoSum(numbers, target) {
	// move the first number each iteration
	for (let firstNumberIndex = 0; firstNumberIndex < numbers.length; firstNumberIndex++) {
		// move the second number
		for (let i = 0; i < numbers.length; i++) {
			const total = numbers[firstNumberIndex] + numbers[i]

			if (total === target) {
				return [numbers[firstNumberIndex], numbers[i]]
			}
		}
	}

	return null
}

console.log(twoSum([2, 7, 11, 15], 9))
console.log(twoSum([3, 2, 4], 6))
console.log(twoSum([3, 3], 6))
