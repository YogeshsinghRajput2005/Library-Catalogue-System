// Search function: filters books based on title or author
function searchBooks() {
  const input = document.getElementById('searchBar').value.toLowerCase();
  const rows = document.querySelectorAll('#book-list tbody tr');

  rows.forEach(row => {
    const title = row.cells[0].textContent.toLowerCase();
    const author = row.cells[1].textContent.toLowerCase();

    if (title.includes(input) || author.includes(input)) {
      row.style.display = '';
    } else {
      row.style.display = 'none';
    }
  });
}

// Borrow book function: changes status and disables button
function borrowBook(button) {
  const row = button.closest('tr');
  const statusCell = row.cells[2];

  statusCell.textContent = 'Borrowed';
  button.textContent = 'Borrowed';
  button.disabled = true;
}

// Add new book function: appends a row to the table
function addBook(event) {
  event.preventDefault();

  const titleInput = document.getElementById('newTitle');
  const authorInput = document.getElementById('newAuthor');
  const title = titleInput.value.trim();
  const author = authorInput.value.trim();

  if (title === '' || author === '') {
    alert('Please enter both title and author.');
    return;
  }

  const tableBody = document.querySelector('#book-list tbody');

  const newRow = document.createElement('tr');
  newRow.innerHTML = `
    <td>${title}</td>
    <td>${author}</td>
    <td>Available</td>
    <td><button onclick="borrowBook(this)">Borrow</button></td>
  `;

  tableBody.appendChild(newRow);

  // Clear the input fields
  titleInput.value = '';
  authorInput.value = '';
}
