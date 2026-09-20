function showName() {

    // TODO 1:
    // Select the input element
    const nameInput = document.getElementById("nameInput");


    // TODO 2:
    // Read the value entered by the user
    const name = nameInput.value;


    // TODO 3:
    // Select the output paragraph
    const nameOutput = document.getElementById("output");

    // TODO 4:
    // Display "Hello, <name>!"
    nameOutput.textContent = `Hello, ${name}!`;

}