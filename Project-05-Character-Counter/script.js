function updateCount() {

    // TODO:
    // Get textarea value
    const message = document.getElementById("message").value;
    

    // Find the number of characters
    const TotalCount = message.length ;

    // Display that number inside #count
    const count = document.getElementById("count");
    count.textContent = TotalCount;
}