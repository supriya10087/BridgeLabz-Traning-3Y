// Question 6: Real-Time Table Filter Using input Event
document.addEventListener("DOMContentLoaded", () => {
  document.body.innerHTML = `
    <main class="app">
      <h2>Student Search</h2>
      <input id="searchInput" type="text" placeholder="Search by name, branch or CGPA">
      <table>
        <thead><tr><th>Name</th><th>Branch</th><th>CGPA</th></tr></thead>
        <tbody id="studentRows"></tbody>
      </table>
      <p id="noResults" hidden>No results found</p>
    </main>`;

  const style = document.createElement("style");
  style.textContent = `
    body{font-family:Arial,sans-serif;background:#f4f6fb;padding:30px}
    .app{max-width:700px;margin:auto;background:white;padding:25px;border-radius:12px}
    input{width:100%;padding:11px;box-sizing:border-box;margin-bottom:15px}
    table{width:100%;border-collapse:collapse}th,td{padding:11px;border:1px solid #ddd;text-align:left}
    th{background:#eaf0fa}tbody tr:nth-child(even){background:#f7f8fb}
  `;
  document.head.appendChild(style);

  const students = [
    { name: "Aarav Sharma", branch: "CSE", cgpa: "8.7" },
    { name: "Priya Verma", branch: "IT", cgpa: "9.1" },
    { name: "Rahul Kumar", branch: "ECE", cgpa: "7.8" },
    { name: "Neha Singh", branch: "CSE", cgpa: "8.9" },
    { name: "Arjun Patel", branch: "ME", cgpa: "7.5" },
    { name: "Isha Gupta", branch: "AI & DS", cgpa: "9.3" }
  ];

  const rows = document.getElementById("studentRows");
  const searchInput = document.getElementById("searchInput");
  const noResults = document.getElementById("noResults");

  function renderRows(searchText = "") {
    const query = searchText.trim().toLowerCase();
    const filteredStudents = students.filter(student =>
      `${student.name} ${student.branch} ${student.cgpa}`.toLowerCase().includes(query)
    );

    rows.innerHTML = "";
    filteredStudents.forEach(student => {
      const row = document.createElement("tr");
      [student.name, student.branch, student.cgpa].forEach(value => {
        const cell = document.createElement("td");
        cell.textContent = value;
        row.appendChild(cell);
      });
      rows.appendChild(row);
    });
    noResults.hidden = filteredStudents.length !== 0;
  }

  searchInput.addEventListener("input", event => renderRows(event.target.value));
  renderRows();
});