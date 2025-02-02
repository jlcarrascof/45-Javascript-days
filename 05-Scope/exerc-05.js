let count = 0; // Global variable
if (true) {
  let count = 1; // Block-scoped variable
  console.log(count); // What is the value of 'count' here?
  if (true) {
    let count = 2; // Another block-scoped variable
    console.log(count); // What is the value of 'count' here?
  }
  console.log(count); // What is the value of 'count' here?
}
console.log(count); // What is the value of 'count' here?
