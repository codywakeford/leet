// Here is a basic implementation of a adjacency list representation graph.

const airports = "ALE BKK IOG GOA FGI GIO OPQ QML KOT NMF IAF UAL".split(" ")

const connections = [
    ["ALE", "IAF"],
    ["IOG", "FGI"],
    ["IAF", "NMF"],
    ["ALE", "UAL"],
    ["FGI", "BKK"],
    ["NMF", "IAF"],
    ["QML", "QML"],
    ["GOA", "OPQ"],
    ["ALE", "FGI"],
    ["GOA", "FGI"],
    ["UAL", "KOT"],
    ["NMF", "IOG"],
    ["IAF", "OPQ"],
    ["GOA", "QML"],
    ["KOT", "BKK"],
    ["UAL", "IAF"],
    ["ALE", "OPQ"],
]

class AdjacencyList {
    constructor(nodes) {
        this.graph = new Map()

        for (let node of nodes) {
            this.addNode(node)
        }
    }

    addNode(node) {
        this.graph.set(node, [])
    }

    removeNode(node) {
        if (!this.graph.has(node)) throw new Error("Node not found.")
        this.graph.delete(node)
    }

    addConnectionList(connectionArrayList) {
        for (const connectionArray of connectionArrayList) {
            this.addConnection(connectionArray)
        }
    }

    addConnection(connectionArray) {
        const [node1, node2] = connectionArray

        const list1 = this.graph.get(node1)
        const list2 = this.graph.get(node2)

        if (!list1 || !list2) throw new Error("Node not found.")

        list1.push(node2)
        list2.push(node1)
    }
    removeConnection(connectionArray) {
        const [node1, node2] = connectionArray

        const list1 = this.graph.get(node1)
        const list2 = this.graph.get(node2)

        if (!list1 || !list2) throw new Error("Node not found.")

        list1.splice(list1.indexOf(node2), 1)
        list2.splice(list2.indexOf(node1), 1)
    }

    // O(n)
    bredthFirstSearch(start, end) {
        const visited = new Set()
        const queue = [start]

        while (queue.length > 0) {
            const airport = queue.shift()
            const destinations = this.graph.get(airport)

            for (const destination of destinations) {
                if (destination === end) {
                    console.log("found")
                }

                if (!visited.has(destination)) {
                    visited.add(destination)
                    queue.push(destination)
                    console.log(destination)
                }
            }
        }
        console.log("No path found")
    }

    // O(n)
    depthFirstSearch(start, end, visited = new Set()) {
        visited.add(start)

        const destinations = this.graph.get(start)

        for (const destination of destinations) {
            if (destination === end) {
                console.log("found")
                return
            }

            if (!visited.has(destination)) {
                console.log(destination)
                this.depthFirstSearch(destination, end, visited)
            }
        }
    }
}

const graph = new AdjacencyList(airports)
graph.addConnectionList(connections)

graph.bredthFirstSearch("UAL", "IAF")
graph.depthFirstSearch("UAL", "IAF")
