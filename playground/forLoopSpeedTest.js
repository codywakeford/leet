function sumForEach(array) {
	let sum = 0
	array.forEach((number) => {
		sum += number
	})

	return sum
}

function sumReduce(array) {
	array.reduce((accumulator, currentValue) => {
		return accumulator, currentValue
	})
}

function sumForOf(array) {
	let sum = 0
	for (let number of array) {
		sum += number
	}
	return sum
}

function sumFor(array) {
	let sum = 0

	for (let i = 0; i < array.length; i++) {
		sum += array[i]
	}

	return sum
}

const array = Array.from({ length: 100000 }, (_, i) => i)

Deno.bench({
	name: "forEach",
	fn: () => {
		sumForEach(array)
	},
})

Deno.bench({
	name: "reduce",
	fn: () => {
		sumReduce(array)
	},
})

Deno.bench({
	name: "for",
	fn: () => {
		sumFor(array)
	},
	baseline: true,
})

Deno.bench({
	name: "forOf",
	fn: () => {
		sumForOf(array)
	},
})

/** 
=>  deno bench playground/forLoopSpeedTest.js

CPU | Intel(R) Core(TM) i7-9700K CPU @ 3.60GHz
Runtime | Deno 2.0.2 (x86_64-unknown-linux-gnu)

file:///home/cody/git/leet/playground/forLoopSpeedTest.js


benchmark   time/iter (avg)        iter/s      (min … max)           p75      p99     p995
----------- ----------------------------- --------------------- --------------------------
forEach            777.3 µs         1,287 (497.1 µs …   1.5 ms) 944.3 µs   1.3 ms   1.4 ms
reduce             816.5 µs         1,225 (787.4 µs …   1.4 ms) 809.2 µs   1.1 ms   1.2 ms
for                150.4 µs         6,651 ( 90.6 µs … 489.6 µs) 152.4 µs 224.6 µs 307.6 µs
forOf              259.9 µs         3,847 ( 85.8 µs …   1.8 ms)  90.1 µs   1.0 ms   1.3 ms

summary
  for
     1.73x faster than forOf
     5.17x faster than forEach
     5.43x faster than reduce


 */
