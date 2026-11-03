// Question 3: Multi-Step Form with Next/Back and Validation
document.addEventListener("DOMContentLoaded", () => {
  document.body.innerHTML = `
    <main class="app">
      <h2>Three-Step Form</h2>
      <p id="stepLabel">Step 1 of 3: Name</p>
      <section id="step1" class="step">
        <label for="name">Name</label>
        <input id="name" type="text" placeholder="Enter your name">
        <p class="error" id="nameError"></p>
      </section>
      <section id="step2" class="step" hidden>
        <label for="email">Email</label>
        <input id="email" type="email" placeholder="Enter your email">
        <p class="error" id="emailError"></p>
      </section>
      <section id="step3" class="step" hidden>
        <label for="password">Password</label>
        <input id="password" type="password" placeholder="Enter a password">
        <p class="error" id="passwordError"></p>
      </section>
      <div class="buttons">
        <button id="backButton" type="button" disabled>Back</button>
        <button id="nextButton" type="button">Next</button>
      </div>
      <section id="summary" hidden></section>
    </main>`;

  const style = document.createElement("style");
  style.textContent = `
    body{font-family:Arial,sans-serif;background:#f4f6fb;padding:30px}
    .app{max-width:500px;margin:auto;background:white;padding:25px;border-radius:12px}
    label{display:block;margin-bottom:7px}input{width:100%;padding:11px;box-sizing:border-box}
    button{padding:10px 18px;margin:12px 5px 0 0;cursor:pointer}
    .error{color:red;font-size:14px}.buttons{margin-top:12px}
  `;
  document.head.appendChild(style);

  let currentStep = 1;
  const steps = [1, 2, 3].map(number => document.getElementById(`step${number}`));
  const stepLabel = document.getElementById("stepLabel");
  const backButton = document.getElementById("backButton");
  const nextButton = document.getElementById("nextButton");
  const summary = document.getElementById("summary");

  function validateCurrentStep() {
    if (currentStep === 1) {
      const valid = document.getElementById("name").value.trim() !== "";
      document.getElementById("nameError").textContent = valid ? "" : "Please enter your name.";
      return valid;
    }
    if (currentStep === 2) {
      const email = document.getElementById("email").value.trim();
      const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
      document.getElementById("emailError").textContent = valid ? "" : "Please enter a valid email.";
      return valid;
    }
    const valid = document.getElementById("password").value.length >= 6;
    document.getElementById("passwordError").textContent = valid ? "" : "Password must contain at least 6 characters.";
    return valid;
  }

  function showStep() {
    steps.forEach((step, index) => step.hidden = index + 1 !== currentStep);
    stepLabel.textContent = `Step ${currentStep} of 3: ${["Name", "Email", "Password"][currentStep - 1]}`;
    backButton.disabled = currentStep === 1;
    nextButton.textContent = currentStep === 3 ? "Submit" : "Next";
  }

  nextButton.addEventListener("click", () => {
    if (!validateCurrentStep()) return;
    if (currentStep < 3) {
      currentStep++;
      showStep();
    } else {
      steps.forEach(step => step.hidden = true);
      stepLabel.hidden = true;
      backButton.hidden = true;
      nextButton.hidden = true;
      summary.hidden = false;
      summary.innerHTML = `
        <h3>Form Summary</h3>
        <p><strong>Name:</strong> ${escapeHTML(document.getElementById("name").value.trim())}</p>
        <p><strong>Email:</strong> ${escapeHTML(document.getElementById("email").value.trim())}</p>
        <p><strong>Password:</strong> Submitted successfully (hidden for privacy)</p>`;
    }
  });

  backButton.addEventListener("click", () => {
    if (currentStep > 1) {
      currentStep--;
      showStep();
    }
  });

  function escapeHTML(value) {
    return value.replace(/[&<>"']/g, character => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
    })[character]);
  }

  showStep();
});