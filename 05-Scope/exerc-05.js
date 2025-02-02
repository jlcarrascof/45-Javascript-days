let count = 0; // Global variable
if (true) {
  let contador = 1; // Block-scoped variable
  console.log(contador); // What is the value of 'contador' here?
  if (true) {
    let contador = 2; // Another block-scoped variable
    console.log(contador); // What is the value of 'contador' here?
  }
  console.log(contador); // What is the value of 'contador' here?
}
console.log(contador); // What is the value of 'contador' here?
