function countWords(words) {
    return words.map(function(word) {
        return word.length
    })
}

const array = ["Javier", "Patricia", "Tatiana", "Jose"]
const finalResult = countWords(array)
console.log(finalResult) // [6, 8, 7, 4]
