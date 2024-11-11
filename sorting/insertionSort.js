const array = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100) + 1)

array

/** O(n^2) time complexity */
function insertionSort(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        let pointer = i

        if (numbers[i] > numbers[i + 1]) {
            ;[numbers[i], numbers[i + 1]] = [numbers[i + 1], numbers[i]]
        }

        while (pointer > 0) {
            if (numbers[pointer - 1] > numbers[pointer]) {
                ;[numbers[pointer - 1], numbers[pointer]] = [numbers[pointer], numbers[pointer - 1]]
            }

            pointer--
        }
    }

    return numbers
}

const result = insertionSort(array)

result
