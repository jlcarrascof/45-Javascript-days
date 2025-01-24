/*
Title: "Count the Frequency of Strings"

Question: "Write a function in JavaScript that takes an array of strings and a callback. The function should count how many times each string appears in the array and pass the result to the callback."

Observation: "This question is designed to assess your ability to manipulate arrays, work with objects, and use callbacks effectively. Counting the frequency of elements in a dataset is a common task in data analysis and web development. By solving this problem, you demonstrate your understanding of loops, conditional logic, and callback functions, all of which are essential skills for JavaScript developers."
*/

function countStrings(strings, callback) {
    const count = {}

    for (let i = 0; i < strings.length; i++) {
        const word = strings[i]
        count[word] = (count[word] || 0) + 1
    }
    callback(count)
}


countStrings(["apple", "pear", "apple", "grape", "pear", "apple"], (res) => console.log("Count of words in the array:", res))
