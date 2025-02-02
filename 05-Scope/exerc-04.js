var x = 10; // Global variable
function test() {
  var x = 20; // Local variable (shadowing)
  console.log(x); // What is the value of 'x' here?
}
test();
console.log(x); // What is the value of 'x' here?
