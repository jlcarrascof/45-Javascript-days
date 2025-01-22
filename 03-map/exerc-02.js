function addFive(numbers) {
    return numbers.map(function(number) {
        return number + 5
    })
}

const numbers = [1, 2, 3, 4]
const newNumbers = addFive(numbers)
console.log(newNumbers) // [6, 7, 8, 9]
