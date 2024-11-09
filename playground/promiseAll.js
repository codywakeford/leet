async function promiseFunction() {
	return "hello"
}

const var1 = promiseFunction()
const var2 = promiseFunction()
const var3 = promiseFunction()

const promiseArray = [var1, var2, var3]

// old // .catch
Promise.all(promiseArray).then((values) => {
	console.log(values)
})

// modern // try-catch
const resultArray = await Promise.all(promiseArray)
console.log(resultArray)
