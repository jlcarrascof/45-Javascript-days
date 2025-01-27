const grades = [85, 90, 78, 92, 88]

const total = grades.reduce((accumulator, grade) => {
    return accumulator + grade
}, 0)

const average = total / grades.length
console.log(average) // 86.6
