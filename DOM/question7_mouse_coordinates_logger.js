// Question 7: Detect Mouse Path & Coordinates Logger
document.addEventListener("DOMContentLoaded", () => {
  document.body.innerHTML = `
    <main class="app">
      <h2>Mouse Coordinates Logger</h2>
      <p>Move your mouse inside the box. Double-click to place a red dot.</p>
      <div id="trackingBox">
        <span id="coordinates">clientX: --, clientY: --</span>
      </div>
      <p id="clickCoordinates">Double-click coordinates: --</p>
    </main>`;

  const style = document.createElement("style");
  style.textContent = `
    body{font-family:Arial,sans-serif;background:#f4f6fb;padding:25px}
    .app{max-width:600px;margin:auto;background:white;padding:22px;border-radius:12px}
    #trackingBox{width:400px;height:400px;max-width:100%;background:#eaf2ff;border:2px solid #5276a5;position:relative;overflow:hidden}
    #coordinates{position:absolute;top:10px;left:10px;background:white;padding:7px;border-radius:5px}
    .dot{width:12px;height:12px;background:red;border-radius:50%;position:absolute;transform:translate(-50%,-50%)}
  `;
  document.head.appendChild(style);

  const box = document.getElementById("trackingBox");
  const coordinates = document.getElementById("coordinates");
  const clickCoordinates = document.getElementById("clickCoordinates");

  box.addEventListener("mousemove", event => {
    coordinates.textContent = `clientX: ${event.clientX}, clientY: ${event.clientY}`;
  });

  box.addEventListener("dblclick", event => {
    const rectangle = box.getBoundingClientRect();
    const x = event.clientX - rectangle.left;
    const y = event.clientY - rectangle.top;

    const dot = document.createElement("span");
    dot.className = "dot";
    dot.style.left = `${x}px`;
    dot.style.top = `${y}px`;
    box.appendChild(dot);

    clickCoordinates.textContent = `Double-click coordinates: clientX ${event.clientX}, clientY ${event.clientY}`;
  });
});