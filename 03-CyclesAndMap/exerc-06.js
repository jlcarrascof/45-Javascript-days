/*
Title: "Convert Temperatures from Celsius to Fahrenheit"

Exercise: "Write a function that converts a list of temperatures from Celsius to Fahrenheit. Solve this using a traditional for loop and then with map()."

Observations: "This question is designed to assess your ability to manipulate and transform arrays in JavaScript. It is essential to perform mathematical conversions and apply those conversions to all elements in an array. This type of task is common in the development of applications requiring data processing and unit conversions, such as weather applications. Using both a traditional for loop and the map() method demonstrates your versatility and deep understanding of the available tools in JavaScript."
*/

function convertWeather(temperatures) {
    return temperatures.map(function(temperature) {
        return (temperature * 9/5) + 32
    })
}


const celsius = [0, 25, 30, 78]
let farenheit = convertWeather(celsius)
console.log(farenheit)
