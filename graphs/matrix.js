// Here is a basic implementation of a matrix graph.

// Here there is no data encoded in the connection, if you wanted to
// do that you could have null for no connection and data to represent
// a connection with data.
const matrixStructureExample = [
    [null, "STK", "DVN", "LDN"],
    ["STK", 0, 0, 0],
    ["DVN", 0, 0, 0],
    ["LDN", 0, 0, 0],
]

const airports = "ALE BKK IOG GOA FGI GIO OPQ QML KOT NMF IAF UAL".split(" ")

class Matrix {
    constructor(nodes) {
        this.matrix = [[null]]

        for (let node of nodes) {
            this.matrix[0].push(node)

            this.matrix.push([node, ...new Array(nodes.length).fill(0)])
        }
    }

    addNode(node) {
        this.matrix[0].push(node)

        for (let row of this.matrix) {
            if (row[0] === null) continue

            row.push(0)
        }

        this.matrix.push([node, ...new Array(this.matrix[0].length - 1).fill(0)]) // add row
    }

    removeNode(node) {
        let nodeIndex = this.matrix[0].indexOf(node)

        if (nodeIndex === -1) throw new Error("Node does not exist.")

        for (let row of this.matrix) {
            if (row[0] === null) continue
            row.splice(nodeIndex, 1)
        }

        this.matrix.splice(nodeIndex, 1)

        this.matrix[0].splice(nodeIndex, 1)
    }

    addConnection(node1, node2) {
        const node1Index = this.matrix[0].indexOf(node1)
        const node2Index = this.matrix[0].indexOf(node2)

        if (node1Index === -1 || node2Index === -1) throw new Error("Node does not exist.")

        this.matrix[node1Index][node2Index] = 1
        this.matrix[node2Index][node1Index] = 1
    }

    removeConnection(node1, node2) {
        const node1Index = this.matrix[0].indexOf(node1)
        const node2Index = this.matrix[0].indexOf(node2)

        if (node1Index === -1 || node2Index === -1) throw new Error("Node does not exist.")

        this.matrix[node1Index][node2Index] = 0
        this.matrix[node2Index][node1Index] = 0
    }

    log() {
        for (let row of this.matrix) {
            console.log(row)
        }
    }
}

const matrix = new Matrix(airports)
console.log(matrix.log())
