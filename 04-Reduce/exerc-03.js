const words = ["Hello", "world", "since", "JavaScript"]
let sentence = ""

for (let i = 0; i < words.length; i++) {
    sentence += words[i] + (i < words.length - 1 ? ", " : "")
}

console.log(sentence) // "Hello, world, since, JavaScript"
