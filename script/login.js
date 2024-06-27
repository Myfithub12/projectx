function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var message = document.getElementById("message");

    // Check username and password
    if (username === "user" && password === "password") {
        message.innerHTML = "Login Successful!";
        message.style.color = "#4CAF50";
    } else {
        message.innerHTML = "Login Failed. Please check your username and password.";
        message.style.color = "#FF6347";
    }
}