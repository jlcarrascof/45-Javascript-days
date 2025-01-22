function addFive(numbers) {
    const result = []
    for (let i = 0; i < numbers.length; i++) {
        result.push(numbers[i] + 5)
    }
    return result
}

const numbers = [1, 2, 3, 4]
const newNumbers = addFive(numbers)
console.log(newNumbers) // [6, 7, 8, 9]
