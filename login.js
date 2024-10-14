// Function to toggle the password visibility
function togglePasswordVisibility() {
    const passwordField = document.getElementById("password");
    const fieldType = passwordField.getAttribute("type");

    if (fieldType === "password") {
        passwordField.setAttribute("type", "text");
    } else {
        passwordField.setAttribute("type", "password");
    }
}

document.querySelector('.login-form').addEventListener('submit', function(e) {
    e.preventDefault(); 
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    if (email && password) {
        window.location.href = "loading.html"; 
    } else {
        alert("Please enter both email and password.");
    }
});

