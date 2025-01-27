/*

Title: "Calculate the Average of an Array"

Question: "For the advanced exercise, we will calculate the average of an array of numbers. First, we will solve it using a traditional for loop, and then with reduce()."

Observation: "This question is designed to assess your ability to manipulate arrays and perform mathematical calculations in JavaScript. It is essential to be able to iterate through an array and apply operations like sum and average. This type of task is common in the development of applications that require data processing and statistical analysis. Using both a traditional for loop and the reduce() method demonstrates your understanding of the different tools available in JavaScript and how to apply them efficiently."

------------
Título: "Calcular el Promedio de un Arreglo"

Pregunta: "Para el ejercicio avanzado, vamos a calcular el promedio de un arreglo de números. Primero, lo resolveremos con un ciclo for, y luego con reduce()."

Razonamiento: "Esta pregunta está diseñada para evaluar tu habilidad para manipular arreglos y realizar cálculos matemáticos en JavaScript. Es fundamental que puedas iterar a través de un arreglo y aplicar operaciones de suma y promedio. Este tipo de tarea es común en el desarrollo de aplicaciones que requieren procesamiento de datos y análisis estadístico. Utilizar tanto un ciclo for tradicional como el método reduce() demuestra tu comprensión de las diferentes herramientas disponibles en JavaScript y cómo aplicarlas de manera eficiente."

*/

const grades = [85, 90, 78, 92, 88]
let total = 0

for (let i = 0; i < grades.length; i++) {
    total += grades[i]
}

const average = total / grades.length
console.log(average) // 86.6
