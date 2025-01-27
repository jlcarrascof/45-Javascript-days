const grades = [85, 90, 78, 92, 88]
let total = 0

for (let i = 0; i < grades.length; i++) {
    total += grades[i]
}

const average = total / grades.length
console.log(average) // 86.6
