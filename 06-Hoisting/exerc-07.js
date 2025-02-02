console.log(a); // What is the value of 'a' here?
var a = 5;
console.log(b); // What is the value of 'b' here?
let b = 10;

function example() {
  console.log(c); // What is the value of 'c' here?
  var c = 15;
  console.log(d); // What is the value of 'd' here?
  let d = 20;

  if (true) {
    console.log(e); // What is the value of 'e' here?
    var e = 25;
    console.log(f); // What is the value of 'f' here?
    let f = 30;
  }

  console.log(e); // What is the value of 'e' here?
  console.log(f); // What is the value of 'f' here?
}

example();

console.log(a); // What is the value of 'a' here?
console.log(b); // What is the value of 'b' here?
