document.querySelector("#btn1").addEventListener("click", getCurrentValue);

function updateValue(newValue) {
  let span = document.querySelector("#bitcoin-value");
  span.innerHTML = newValue;

  setTimeout(getCurrentValue, 60000);
}

function getCurrentValue() {
  // 1. Create an XHR object

  const window = new XMLHttpRequest();

  // 2. Configure the request...

  window.open("GET", "https://blockchain.info/q/24hrprice?cors=true");

  // 3. Action on recieving the data

  window.onload = function () {
    if (this.status === 200) {
      document.querySelector(
        "#output"
      ).innerHTML = `<strong>${this.responseText} (USD)</strong>`;
    }
  };

  window.onerror = function (e) {
    updateValue("Error, Unable to get current value.");
  };

  // 4. Execute the request

  window.send();
}
