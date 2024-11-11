const array = Array.from({ length: 10 }, () => Math.floor(Math.random() * 10) + 1)

function bubble(array) {
	let sorted = false

	while (!sorted) {
		let sortedOnPass = false

		for (let i = 0; i < array.length - 1; i++) {
			const number1 = array[i]
			const number2 = array[i + 1]

			if (number1 > number2) {
				;[array[i], array[i + 1]] = [array[i + 1], array[i]]
				sortedOnPass = true
			}
		}

		if (!sortedOnPass) sorted = true
	}
	return array
}

const result = bubble(array)
result
