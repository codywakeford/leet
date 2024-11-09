const promise = new Promise((resolve, reject) => {})
const promise2 = async function () {}

console.log(promise)

function promiseFunction(x) {
	return new Promise((resolve, reject) => {
		if (x === 1) {
			resolve("Resolved return value")
		} else {
			reject("This is the error value")
		}
	})
}

promiseFunction(1).then((message) => {
	console.log(message)
})

promiseFunction(0).catch((message) => {
	console.log(message)
})

const var1 = await promiseFunction(1)
console.log(var1)

const var2 = promiseFunction(1)
console.log(var2)

var2.then((message) => {
	console.log(message)
})

const var3 = promiseFunction(0)
console.log(var3)

var3.catch((message) => {
	console.log(message)
})

//////////////////////////////////

// implicitly returns promise.
async function function1() {
	return "hello there"
}

const hello1 = function1()
console.log(hello1)

const hello2 = await function1()
console.log(hello2)

const hello3 = function1().then((message) => {
	console.log(message)
}) // ??
