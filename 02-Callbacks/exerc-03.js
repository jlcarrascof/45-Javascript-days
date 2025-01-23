function addNumbers(arr) {
    let add = 0
    for (let i = 0; i < arr.length; i++) {
        add += arr[i]
    }
    console.log('The add is:', add)
}

addNumbers([1, 2, 3, 4])
