//https://neetcode.io/problems/valid-sudoku

const board1 = [
    ["1", "2", ".", ".", "3", ".", ".", ".", "."],
    ["4", ".", ".", "5", ".", ".", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", ".", "3"],
    ["5", ".", ".", ".", "6", ".", ".", ".", "4"],
    [".", ".", ".", "8", ".", "3", ".", ".", "5"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", ".", ".", ".", ".", ".", "2", ".", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "8"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
]

const board2 = [
    ["1", "2", ".", ".", "3", ".", ".", ".", "."],
    ["4", ".", ".", "5", ".", ".", ".", ".", "."],
    [".", "9", "1", ".", ".", ".", ".", ".", "3"],
    ["5", ".", ".", ".", "6", ".", ".", ".", "4"],
    [".", ".", ".", "8", ".", "3", ".", ".", "5"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", ".", ".", ".", ".", ".", "2", ".", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "8"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
]

class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const cols = new Map()
        const rows = new Map()
        const squares = new Map()

        for (let r = 0; r < 9; r++) {
            for (let c = 0; c < 9; c++) {
                if (board[r][c] === ".") continue

                const squareKey = `${Math.floor(r / 3)},${Math.floor(c / 3)}`

                if (
                    (rows.get(r) && rows.get(r).has(board[r][c])) ||
                    (cols.get(c) && cols.get(c).has(board[r][c])) ||
                    (squares.get(squareKey) && squares.get(squareKey).has(board[r][c]))
                ) {
                    return false
                }

                if (!rows.has(r)) rows.set(r, new Set())
                if (!cols.has(c)) cols.set(c, new Set())
                if (!squares.has(squareKey)) squares.set(squareKey, new Set())

                rows.get(r).add(board[r][c])
                cols.get(c).add(board[r][c])
                squares.get(squareKey).add(board[r][c])
            }
        }
        return true
    }
}

const solution = new Solution()

console.log(solution.isValidSudoku())
