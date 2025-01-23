/*
Título: "Convierte Temperaturas de Celsius a Fahrenheit"

Ejercicio: "Escribe una función que convierta una lista de temperaturas en grados Celsius a grados Fahrenheit. Resuelve esto usando un ciclo for tradicional y luego con map()."

Observaciones: "Esta pregunta está diseñada para evaluar tu habilidad para manipular y transformar arreglos en JavaScript. Es fundamental que puedas realizar conversiones matemáticas y aplicar esas conversiones a todos los elementos de un arreglo. Este tipo de tarea es común en el desarrollo de aplicaciones que requieren procesamiento de datos y manipulación de unidades, como aplicaciones de clima. Utilizar tanto un ciclo for tradicional como el método map() demuestra tu versatilidad y comprensión profunda de las herramientas disponibles en JavaScript."
*/

function convertWeather(temperatures) {
    const result = []
    for (let i = 0; i < temperatures.length; i++) {
        var farenheit = (temperatures[i] * 9/5) + 32
        result.push(farenheit)
    }
    return result
}


const celsius = [0, 25, 30, 78]
let farenheit = convertWeather(celsius)
console.log(farenheit)
