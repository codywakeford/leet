// https://neetcode.io/problems/string-encode-and-decode

const strs1 = ["neet", "code", "love", "you"]
const strs2 = ["we", "say", ":", "yes"]
const strs3 = ["we", "say", ":", "yes", "!@#$%^&*()"]

class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        if (strs.length === 0) return ""

        let encodedString = ""
        for (const string of strs) {
            encodedString += `${string.length}#${string}`
        }

        return encodedString
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        if (str.length === 0) return []

        let encoded = Array.from(str)
        let decoded = []

        while (encoded.length > 0) {
            let number = ""
            while (encoded[0] !== "#") {
                number += encoded.shift()
            }

            let wordLength = Number(number)
            encoded.shift() // x #

            let word = ""

            for (let i = 0; i < wordLength; i++) {
                word += encoded.shift()
            }

            decoded.push(word)
        }

        return decoded
    }
}

const solution = new Solution()

const encoded1 = solution.encode(strs1)
const decoded1 = solution.decode(encoded1)

console.log(encoded1)
console.log(decoded1)

const encoded2 = solution.encode(strs2)
const decoded2 = solution.decode(encoded2)

console.log(encoded2)
console.log(decoded2)

const encoded3 = solution.encode(strs3)
const decoded3 = solution.decode(encoded3)

console.log(encoded3)
console.log(decoded3)
