// Question 9: Form Submit Blocker with preventDefault() and Live Errors
document.addEventListener("DOMContentLoaded", () => {
  document.body.innerHTML = `
    <main class="app">
      <h2>Registration Form</h2>
      <form id="registrationForm" novalidate>
        <label for="name">Name</label>
        <input id="name" type="text" placeholder="Enter your name">
        <small class="error" id="nameError"></small>

        <label for="email">Email</label>
        <input id="email" type="text" placeholder="Enter your email">
        <small class="error" id="emailError"></small>

        <label for="password">Password</label>
        <input id="password" type="password" placeholder="At least 6 characters">
        <small class="error" id="passwordError"></small>

        <button type="submit">Submit</button>
      </form>
      <p id="successMessage" class="success" role="status"></p>
    </main>`;

  const style = document.createElement("style");
  style.textContent = `
    body{font-family:Arial,sans-serif;background:#f4f6fb;padding:30px}
    .app{max-width:480px;margin:auto;background:white;padding:25px;border-radius:12px}
    label{display:block;margin:13px 0 6px}input{width:100%;padding:11px;box-sizing:border-box}
    button{padding:11px 20px;margin-top:18px;cursor:pointer}
    .error{display:block;color:red;min-height:18px;margin-top:4px}
    .success{color:green;font-weight:bold}
  `;
  document.head.appendChild(style);

  const form = document.getElementById("registrationForm");
  const fields = {
    name: document.getElementById("name"),
    email: document.getElementById("email"),
    password: document.getElementById("password")
  };
  const errors = {
    name: document.getElementById("nameError"),
    email: document.getElementById("emailError"),
    password: document.getElementById("passwordError")
  };
  const successMessage = document.getElementById("successMessage");

  function validateField(fieldName) {
    const value = fields[fieldName].value.trim();
    let message = "";

    if (fieldName === "name" && value === "") {
      message = "Name is required.";
    } else if (fieldName === "email" && (value === "" || !value.includes("@"))) {
      message = "Enter a valid email containing @.";
    } else if (fieldName === "password" && fields.password.value.length < 6) {
      message = "Password must contain at least 6 characters.";
    }

    errors[fieldName].textContent = message;
    return message === "";
  }

  // Correcting a field immediately rechecks it and removes its error when valid.
  Object.keys(fields).forEach(fieldName => {
    fields[fieldName].addEventListener("input", () => {
      validateField(fieldName);
      successMessage.textContent = "";
    });
  });

  form.addEventListener("submit", event => {
    event.preventDefault(); // Stop the browser from submitting an invalid form.
    const isNameValid = validateField("name");
    const isEmailValid = validateField("email");
    const isPasswordValid = validateField("password");

    if (isNameValid && isEmailValid && isPasswordValid) {
      successMessage.textContent = "Form Submitted Successfully";
      form.reset();
      Object.values(errors).forEach(error => error.textContent = "");
    } else {
      successMessage.textContent = "";
    }
  });
});