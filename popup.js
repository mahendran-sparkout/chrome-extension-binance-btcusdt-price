document.addEventListener('DOMContentLoaded', function () {
  fetchData();
});

function fetchData() {
  fetch('https://api.binance.com/api/v3/ticker/24hr?symbol=BTCUSDT')
    .then(response => response.json())
    .then(data => {
      const dataContainer = document.getElementById('data-container');
      var d = new Date(data.closeTime);

      dataContainer.innerHTML = `
        <b>Date Time:</b> ${d.toLocaleString()}<br>
        <b>Symbol:</b> ${data.symbol}<br>
        <b>Price:</b> ${data.lastPrice}<br>
        <b>Trade Count:</b> ${data.count}
      `;
    })
    .catch(error => {
      console.log('Error fetching data:'+ error);
      const dataContainer = document.getElementById('data-container');
      dataContainer.textContent = 'Error fetching data';
    });
}
