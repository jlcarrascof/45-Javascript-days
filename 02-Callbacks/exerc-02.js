function greet(name, callback) {

    const message = `Hello, ${name}!`
    callback(message)
}

greet('John', (msg) => console.log(msg))
