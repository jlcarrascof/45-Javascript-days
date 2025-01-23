function countWords(words) {
    const lengths = []

    for (let i = 0; i < words.length; i++) {
        lengths.push(words[i].length)
    }

    return lengths
}

const array = ["Javier", "Patricia", "Tatiana", "Jose"]
const finalResult = countWords(array)
console.log(finalResult) // [6, 8, 7, 4]
