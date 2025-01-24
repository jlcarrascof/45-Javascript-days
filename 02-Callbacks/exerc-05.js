/*
Título: "Cuenta la Frecuencia de Strings"

Pregunta: "Escribe una función en JavaScript que tome un array de strings y un callback. La función debe contar cuántas veces aparece cada string en el array y pasar el resultado al callback."

Razonamiento: "Esta pregunta está diseñada para evaluar tu habilidad para manipular arreglos, trabajar con objetos y usar callbacks de manera efectiva. Contar la frecuencia de elementos en un conjunto de datos es una tarea común en el análisis de datos y el desarrollo web. Al resolver este problema, demuestras tu comprensión de bucles, lógica condicional y funciones de callback, todas ellas habilidades esenciales para los desarrolladores de JavaScript."
*/

function countStrings(strings) {
    const count = {}

    for (let i = 0; i < strings.length; i++) {
        const word = strings[i]
        count[word] = (count[word] || 0) + 1
    }

    console.log("Count of words in the array:", count)

}


countStrings(["apple", "pear", "apple", "grape", "pear", "apple"])
