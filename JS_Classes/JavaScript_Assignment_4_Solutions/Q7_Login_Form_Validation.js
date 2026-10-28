// Q7: Login Form Validation using RegExp

const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("loginUsername").value.trim();
    const password = document.getElementById("loginPassword").value;

    const usernamePattern = /^.{5,}$/;
    // Password: minimum 8 characters, uppercase, lowercase, number, and special character.
    const passwordPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/;

    const usernameError = document.getElementById("loginUsernameError");
    const passwordError = document.getElementById("loginPasswordError");
    const loginResult = document.getElementById("loginResult");

    const usernameValid = usernamePattern.test(username);
    const passwordValid = passwordPattern.test(password);

    document.getElementById("loginUsername").style.border = usernameValid ? "2px solid green" : "2px solid red";
    document.getElementById("loginPassword").style.border = passwordValid ? "2px solid green" : "2px solid red";

    usernameError.textContent = usernameValid ? "" : "Username must be at least 5 characters.";
    passwordError.textContent = passwordValid ? "" : "Password must be 8+ characters and include uppercase, lowercase, number, and special character.";

    if (usernameValid && passwordValid) {
        loginResult.textContent = "Validation successful!";
        loginResult.style.color = "green";
    } else {
        loginResult.textContent = "Please correct the errors above.";
        loginResult.style.color = "red";
    }
});
