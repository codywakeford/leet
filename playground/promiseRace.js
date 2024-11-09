const endpoint1 = "https://jsonplaceholder.typicode.com/posts"
const endpoint2 = "https://httpbin.org/get"

const response1 = fetch(endpoint1)
const response2 = fetch(endpoint2)

// return the first result
const result = await Promise.race([response1, response2])
console.log(result)
