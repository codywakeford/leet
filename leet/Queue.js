class Queue {
    constructor() {
        // back [] front
        this.queue = []
    }

    push(x) {
        this.queue.unshift(x)
    }
    pop() {
        this.queue.pop()
    }
    peek() {
        return this.queue[this.queue.length - 1]
    }
    isEmpty() {
        return this.queue.length === 0
    }
}
