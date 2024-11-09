let numbers = []

// function initArray() {
// 	for (let i = 0; i < 10; i++) {
// 		const number = Math.round(Math.random() * 10)

// 		numbers.push(number)
// 	}
// }

// initArray()

const array = Array.from({ length: 10 }, (_, i) => i) // hello

/** Syntax
 *  array.reduce(callback(accumulator, currentValue, currentIndex, array) => {})
 */

const sum = array.reduce((accumulator, currentValue) => {
	return accumulator + currentValue
})

console.log(sum)

const sum2 = array.reduce((accumulator, currentValue, numberIndex, array) => {
	console.log(accumulator)
	console.log(currentValue)
	console.log(numberIndex)
	console.log(array)
})
