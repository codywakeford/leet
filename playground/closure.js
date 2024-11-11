function initCounter() {
    let count = 0

    function increment() {
        count += 1
        return count
    }

    function decrement() {
        count -= 1
        return count
    }

    function getCount() {
        return count
    }

    return {
        decrement,
        getCount,
        increment,
    }
}

const counter1 = initCounter()

console.log(counter1.getCount())
counter1.increment()
console.log(counter1.getCount())

///
function createCart() {
    let items = []

    function addItem(item) {
        items.push(item)
    }

    function getItems() {
        return [...items]
    }

    return { addItem, getItems }
}

const cart = createCart()
cart.addItem({ id: 1, name: "Laptop", price: 1200 })

console.log(cart.getItems())
