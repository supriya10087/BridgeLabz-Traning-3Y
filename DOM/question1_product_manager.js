// Question 1: Dynamic Product List Manager
// Run this file in a browser. It creates its own interface.

document.addEventListener("DOMContentLoaded", () => {
  document.body.innerHTML = `
    <main class="app">
      <h2>Product List Manager</h2>
      <form id="productForm">
        <input id="productInput" type="text" placeholder="Enter product name" required>
        <button type="submit">Add Product</button>
      </form>
      <p class="hint">Use Edit to change a product. Click outside the edited item to save.</p>
      <ul id="productList"></ul>
    </main>`;

  const style = document.createElement("style");
  style.textContent = `
    body{font-family:Arial,sans-serif;background:#f4f6fb;padding:30px}
    .app{max-width:600px;margin:auto;background:white;padding:25px;border-radius:12px}
    input{padding:10px;width:65%;box-sizing:border-box}
    button{padding:10px 14px;margin:4px;cursor:pointer}
    li{padding:10px;margin:8px 0;background:#f0f3f8;border-radius:7px}
    .product-name{margin-right:15px}.hint{color:#555;font-size:14px}
  `;
  document.head.appendChild(style);

  const form = document.getElementById("productForm");
  const input = document.getElementById("productInput");
  const list = document.getElementById("productList");
  let editingItem = null;
  let editingInput = null;

  function saveEdit() {
    if (!editingItem) return;
    const name = editingInput.value.trim();
    const nameSpan = editingItem.querySelector(".product-name");
    if (name) nameSpan.textContent = name;
    editingInput.remove();
    nameSpan.hidden = false;
    editingItem = null;
    editingInput = null;
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const productName = input.value.trim();
    if (!productName) return;

    saveEdit();
    const item = document.createElement("li");
    const name = document.createElement("span");
    name.className = "product-name";
    name.textContent = productName;

    const editButton = document.createElement("button");
    editButton.type = "button";
    editButton.dataset.action = "edit";
    editButton.textContent = "Edit";

    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.dataset.action = "delete";
    deleteButton.textContent = "Delete";

    item.append(name, editButton, deleteButton);
    list.appendChild(item);
    input.value = "";
  });

  // Event delegation: one listener handles Edit and Delete for every list item.
  list.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-action]");
    if (!button) return;
    const item = button.closest("li");

    if (button.dataset.action === "delete") {
      if (editingItem === item) {
        editingItem = null;
        editingInput = null;
      }
      item.remove();
    } else if (button.dataset.action === "edit") {
      if (editingItem && editingItem !== item) saveEdit();
      if (editingItem === item) return;

      const name = item.querySelector(".product-name");
      editingInput = document.createElement("input");
      editingInput.type = "text";
      editingInput.value = name.textContent;
      editingInput.className = "inline-editor";
      name.hidden = true;
      item.insertBefore(editingInput, name);
      editingItem = item;
      editingInput.focus();
      editingInput.select();
    }
  });

  // Clicking anywhere outside the currently edited item automatically saves it.
  document.addEventListener("click", (event) => {
    if (editingItem && !editingItem.contains(event.target)) saveEdit();
  });

  list.addEventListener("keydown", (event) => {
    if (event.target.classList.contains("inline-editor") && event.key === "Enter") {
      event.preventDefault();
      saveEdit();
    }
  });
});