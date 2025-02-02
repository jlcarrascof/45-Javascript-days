function exterior() {
    interior(); // ¿What happens here?
    function interior() {
      console.log("Interior function");
    }
}
exterior();
