document.addEventListener('DOMContentLoaded', function () {
  // Get all prices with class="prices"
  const prices = document.querySelectorAll('.prices');

  // Calculate the total price
  const totalPrice = Array.from(prices).reduce((sum, priceElement) => {
    const price = parseFloat(priceElement.textContent);
    return sum + price;
  }, 0);

  // Create a new row for total price
  const totalRow = document.createElement('tr');
  totalRow.innerHTML = `<td>Total Price</td><td>${totalPrice}</td>`;

  // Append the new row to the table
  const table = document.getElementById('groceryTable');
  table.appendChild(totalRow);
});