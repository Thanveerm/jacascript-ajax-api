const apiUrl = 'https://fakerapi.it/api/v1/books?_quantity=30';
const table = document.getElementById('data-table');
function fetchData() {
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const items = data.data;
      displayData(items);
    })
    .catch(error => console.log(error));
}
function displayData(items) {
  const headers = Object.keys(items[0]);
  const headerRow = document.createElement('tr');
  headers.forEach(header => {
    const th = document.createElement('th');
    th.textContent = header;
    headerRow.appendChild(th);
  });
  table.appendChild(headerRow);
  items.forEach(item => {
    const row = document.createElement('tr');
    headers.forEach(header => {
      const cell = document.createElement('td');
      cell.textContent = item[header];
      row.appendChild(cell);
    });

    table.appendChild(row);
  });
}
fetchData();
