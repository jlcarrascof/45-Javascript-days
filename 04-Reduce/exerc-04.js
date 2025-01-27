const words = ["Hello", "world", "since", "JavaScript"]

// In `reduce()`, the accumulator is the first argument passed to the callback

const sentence = words.reduce((accumulator, word, index) => {
    return accumulator + word + (index < words.length - 1 ? ", " : "")
}, "")

console.log(sentence)
