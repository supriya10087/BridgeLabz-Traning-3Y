// Q6 – E-Commerce Dashboard: Product Card Fetcher
// Run in a browser console or include in an HTML page.
// Fetches products from the Fake Store API and logs title, price and image URL.
// Optional bonus: dynamically creates product cards in the page.
async function fetchProducts() {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    if (!response.ok) throw new Error(`HTTP error: ${response.status}`);
    const products = await response.json();

    products.forEach(product => {
      console.log("Product:", product.title);
      console.log(`Price: $${product.price}`);
      console.log("Image URL:", product.image);
    });

    // Optional HTML cards (requires a container with id="products").
    const container = document.getElementById("products");
    if (container) {
      container.replaceChildren();
      products.forEach(product => {
        const card = document.createElement("article");
        const title = document.createElement("h3");
        title.textContent = product.title;
        const price = document.createElement("p");
        price.textContent = `$${product.price}`;
        const image = document.createElement("img");
        image.src = product.image;
        image.alt = product.title;
        image.width = 100;
        card.append(title, price, image);
        container.appendChild(card);
      });
    }
  } catch (error) {
    console.error("Failed to load products. Please try again.", error);
  }
}
fetchProducts();
