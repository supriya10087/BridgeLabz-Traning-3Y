// Question 4: Theme Switcher Using Attribute Manipulation
document.addEventListener("DOMContentLoaded", () => {
  document.body.innerHTML = `
    <main class="app">
      <h2>Theme Switcher</h2>
      <p>Select a theme for this page.</p>
      <button type="button" data-theme-choice="light">Light</button>
      <button type="button" data-theme-choice="dark">Dark</button>
      <button type="button" data-theme-choice="blue">Blue</button>
      <p id="currentTheme"></p>
    </main>`;

  const style = document.createElement("style");
  style.textContent = `
    body{font-family:Arial,sans-serif;padding:30px;transition:background .2s,color .2s}
    .app{max-width:600px;margin:auto;padding:25px;border-radius:12px}
    button{padding:10px 18px;margin:5px;cursor:pointer}
    body[data-theme="light"]{background:#f4f6fb;color:#222}
    body[data-theme="light"] .app{background:white}
    body[data-theme="dark"]{background:#171923;color:#f5f5f5}
    body[data-theme="dark"] .app{background:#292d3e}
    body[data-theme="blue"]{background:#dceeff;color:#123}
    body[data-theme="blue"] .app{background:#b9dcff}
  `;
  document.head.appendChild(style);

  function applyTheme(theme) {
    // setAttribute is used as required by the assignment.
    document.body.setAttribute("data-theme", theme);
    document.getElementById("currentTheme").textContent = `Current theme: ${theme}`;
  }

  document.querySelectorAll("button[data-theme-choice]").forEach(button => {
    button.addEventListener("click", () => applyTheme(button.dataset.themeChoice));
  });

  const savedTheme = document.body.getAttribute("data-theme") || "light";
  applyTheme(savedTheme);
});