// 2621 Sleep
// https://leetcode.com/problems/sleep/description/

const millis = 1500

function sleep(time) {
	return new Promise((resolve) => {
		setTimeout(resolve, time)
	})
}

console.log("Hello")
await sleep(millis)
console.log("World")
