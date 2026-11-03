// Question 2: Live Character Counter with Warning Behavior
document.addEventListener("DOMContentLoaded", () => {
  document.body.innerHTML = `
    <main class="app">
      <h2>Live Character Counter</h2>
      <textarea id="message" maxlength="100" placeholder="Write your message (maximum 100 characters)"></textarea>
      <p id="counter">100 characters remaining</p>
      <button id="resetButton" type="button">Reset</button>
    </main>`;

  const style = document.createElement("style");
  style.textContent = `
    body{font-family:Arial,sans-serif;background:#f4f6fb;padding:30px}
    .app{max-width:600px;margin:auto;background:white;padding:25px;border-radius:12px}
    textarea{width:100%;height:150px;padding:12px;box-sizing:border-box;font:16px Arial}
    #counter{font-weight:bold;color:green}.warning{color:#d18b00!important}
    .danger{color:red!important}
  `;
  document.head.appendChild(style);

  const textarea = document.getElementById("message");
  const counter = document.getElementById("counter");
  const maxCharacters = 100;

  function updateCounter() {
    const remaining = maxCharacters - textarea.value.length;
    counter.textContent = `${remaining} characters remaining`;
    counter.classList.toggle("warning", remaining > 0 && remaining <= 20);
    counter.classList.toggle("danger", remaining === 0);
  }

  // beforeinput runs before the character is inserted, so preventDefault blocks extra typing.
  textarea.addEventListener("beforeinput", (event) => {
    if (textarea.value.length >= maxCharacters &&
        event.inputType.startsWith("insert")) {
      event.preventDefault();
    }
  });

  textarea.addEventListener("input", () => {
    // Fallback for input methods such as paste or browser autofill.
    if (textarea.value.length > maxCharacters) {
      textarea.value = textarea.value.slice(0, maxCharacters);
    }
    updateCounter();
  });

  document.getElementById("resetButton").addEventListener("click", () => {
    textarea.value = "";
    updateCounter();
    textarea.focus();
  });

  updateCounter();
});