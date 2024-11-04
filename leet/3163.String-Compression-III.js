// 3163. String Compression III
// https://leetcode.com/problems/string-compression-iii/description/?envType=daily-question&envId=2024-11-04

const compressedString = (word) => {
	let compressed = ""
	let counter = 1

	for (let i = 0; i < word.length; i++) {
		const char = word[i]
		const nextChar = word[i + 1]

		if (char === nextChar && counter < 9) {
			counter++
		} else {
			compressed += `${counter}${char}`
			counter = 1
		}
	}
	return compressed
}

console.log(compressedString("abcde"))
console.log(compressedString("aaaaaaaaaaaaaabb"))
