function togglePassword() {

    const password = document.getElementById("password");
    const button = document.getElementById("toggleBtn");

    // TODO:
    // Check the current type of the password input
    const type = password.type;

    // If type is "password":
    //     change it to "text"
    //     change button text to "Hide Password"
    if(type === "password"){
        password.type = "text";
        button.textContent = `Hide Password`;
    }    

    // Otherwise:
    //     change type back to "password"
    //     change button text to "Show Password"
    else{
        password.type = "password";
        button.textContent = `Show Password`;
    }

}