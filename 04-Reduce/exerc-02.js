const numbers = [1, 2, 3, 4, 5]

// In `reduce()`, the accumulator is the first argument passed to the callback

const sum = numbers.reduce((accumulator, number) => {
    return accumulator + number
}, 0)

console.log(sum)
