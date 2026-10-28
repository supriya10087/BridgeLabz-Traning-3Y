// Q2: Student Form Validator (Forms + RegExp)

const studentForm = document.getElementById("studentForm");

studentForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const nameInput = document.getElementById("studentName");
    const emailInput = document.getElementById("studentEmail");
    const phoneInput = document.getElementById("studentPhone");
    const passwordInput = document.getElementById("studentPassword");

    const namePattern = /^[A-Za-z]+(?:\s+[A-Za-z]+)*$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^\d{10}$/;
    const passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/;

    const checks = [
        { input: nameInput, valid: namePattern.test(nameInput.value.trim()), message: "Name must contain alphabets only." },
        { input: emailInput, valid: emailPattern.test(emailInput.value.trim()), message: "Enter a valid email address." },
        { input: phoneInput, valid: phonePattern.test(phoneInput.value.trim()), message: "Phone number must contain exactly 10 digits." },
        { input: passwordInput, valid: passwordPattern.test(passwordInput.value), message: "Password needs at least one uppercase letter, one number, and one special character." }
    ];

    let allValid = true;

    checks.forEach(function (check) {
        const messageElement = document.getElementById(check.input.id + "Error");
        if (check.valid) {
            check.input.style.border = "2px solid green";
            messageElement.textContent = "";
            messageElement.style.color = "green";
        } else {
            check.input.style.border = "2px solid red";
            messageElement.textContent = check.message;
            messageElement.style.color = "red";
            allValid = false;
        }
    });

    const resultMessage = document.getElementById("formResult");
    if (allValid) {
        resultMessage.textContent = "Registration details are valid!";
        resultMessage.style.color = "green";
    } else {
        resultMessage.textContent = "Please correct the highlighted fields.";
        resultMessage.style.color = "red";
    }
});
