// Question 8: Custom Dropdown Using Only JavaScript (no <select> tag)
document.addEventListener("DOMContentLoaded", () => {
  document.body.innerHTML = `
    <main class="app">
      <h2>Custom Dropdown</h2>
      <div id="dropdown" class="dropdown">
        <button id="dropdownButton" type="button" aria-expanded="false">Choose a subject ▾</button>
        <div id="dropdownOptions" class="options" hidden>
          <button type="button" class="option">HTML</button>
          <button type="button" class="option">CSS</button>
          <button type="button" class="option">JavaScript</button>
          <button type="button" class="option">Python</button>
        </div>
      </div>
      <p id="selectedValue">No option selected.</p>
    </main>`;

  const style = document.createElement("style");
  style.textContent = `
    body{font-family:Arial,sans-serif;background:#f4f6fb;padding:30px}
    .app{max-width:450px;margin:auto;background:white;padding:25px;border-radius:12px}
    .dropdown{position:relative;width:230px}
    button{padding:11px 15px;cursor:pointer}
    #dropdownButton{width:100%;text-align:left}
    .options{position:absolute;top:100%;left:0;width:100%;background:white;border:1px solid #ccc;z-index:2}
    .option{display:block;width:100%;text-align:left;border:0;background:white}
    .option:hover{background:#eaf0fa}
  `;
  document.head.appendChild(style);

  const dropdown = document.getElementById("dropdown");
  const dropdownButton = document.getElementById("dropdownButton");
  const options = document.getElementById("dropdownOptions");
  const selectedValue = document.getElementById("selectedValue");

  function setOpen(isOpen) {
    options.hidden = !isOpen;
    dropdownButton.setAttribute("aria-expanded", String(isOpen));
  }

  dropdownButton.addEventListener("click", () => setOpen(options.hidden));

  options.addEventListener("click", event => {
    const option = event.target.closest(".option");
    if (!option) return;
    dropdownButton.textContent = `${option.textContent} ▾`;
    selectedValue.textContent = `Selected subject: ${option.textContent}`;
    setOpen(false);
  });

  // Capturing phase: the document sees outside clicks before bubbling reaches the target.
  document.addEventListener("click", event => {
    if (!dropdown.contains(event.target)) setOpen(false);
  }, true);
});