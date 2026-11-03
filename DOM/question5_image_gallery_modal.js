// Question 5: Image Gallery with Modal Preview
document.addEventListener("DOMContentLoaded", () => {
  document.body.innerHTML = `
    <main class="app">
      <h2>Image Gallery</h2>
      <p>Click any image to view a larger preview.</p>
      <div id="gallery" class="gallery"></div>
    </main>
    <div id="modal" class="modal" aria-hidden="true">
      <div class="modal-content">
        <button id="closeModal" class="close" type="button" aria-label="Close">×</button>
        <img id="largeImage" alt="Large image preview">
      </div>
    </div>`;

  const style = document.createElement("style");
  style.textContent = `
    body{font-family:Arial,sans-serif;background:#f4f6fb;padding:25px}
    .app{max-width:900px;margin:auto;background:white;padding:22px;border-radius:12px}
    .gallery{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}
    .gallery img{width:100%;height:170px;object-fit:cover;border-radius:8px;cursor:pointer}
    .modal{display:none;position:fixed;inset:0;background:rgba(0,0,0,.8);align-items:center;justify-content:center;padding:20px}
    .modal.open{display:flex}.modal-content{position:relative;max-width:850px;width:100%}
    .modal-content img{display:block;width:100%;max-height:80vh;object-fit:contain}
    .close{position:absolute;right:0;top:-42px;font-size:30px;background:white;border:0;border-radius:5px;cursor:pointer}
    @media(max-width:600px){.gallery{grid-template-columns:repeat(2,1fr)}}
  `;
  document.head.appendChild(style);

  const gallery = document.getElementById("gallery");
  const modal = document.getElementById("modal");
  const largeImage = document.getElementById("largeImage");
  const imageDescriptions = ["Mountain", "Ocean", "Forest", "Desert", "Lake", "Flowers"];

  imageDescriptions.forEach((description, index) => {
    const image = document.createElement("img");
    image.src = `https://picsum.photos/seed/dom-gallery-${index + 1}/600/400`;
    image.alt = description;
    image.loading = "lazy";
    image.addEventListener("click", () => {
      largeImage.src = image.src;
      largeImage.alt = `${description} - enlarged preview`;
      modal.classList.add("open");
      modal.setAttribute("aria-hidden", "false");
    });
    gallery.appendChild(image);
  });

  function closeModal() {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    largeImage.removeAttribute("src");
  }

  document.getElementById("closeModal").addEventListener("click", closeModal);
  modal.addEventListener("click", closeModal); // Clicking the overlay closes the modal.
  document.querySelector(".modal-content").addEventListener("click", event => {
    event.stopPropagation(); // Clicking the image itself does not close the modal.
  });
  document.addEventListener("keydown", event => {
    if (event.key === "Escape" && modal.classList.contains("open")) closeModal();
  });
});