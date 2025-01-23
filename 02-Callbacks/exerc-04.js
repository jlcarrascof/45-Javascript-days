function addNumbers(arr, callback) {
    let add = 0
    for (let i = 0; i < arr.length; i++) {
        add += arr[i]
    }
    callback(add)
}

addNumbers([1, 2, 3, 4], (res) => console.log('The add is:', res))
