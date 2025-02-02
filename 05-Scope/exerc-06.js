function exterior() {
    let message = "Hello";
    function interior() {
      console.log(message); // What is the value of 'message' here?
    }
    interior();
}
exterior();
console.log(message); // What happens if we try to access 'message' here?
