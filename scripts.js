const convertButton = document.querySelector(".convertButton");
const currencySelect = document.querySelector(".currency-select");
function convertValue() {
  const inputCurrencyValue = document.querySelector(".input-currency").value;
  const currencyValueToConvert = document.querySelector(
    ".currency-value-to-convert"
  ); // valor em real //
  const currencyValueConverted = document.querySelector(
    ".currency-value-converted" // outras moedas
  );
  const dolarToday = 5.2;
  const eurotoday = 6.22;
  const convertedValue = inputCurrencyValue / dolarToday;
  if (currencySelect.value == "dolar") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputCurrencyValue / dolarToday);
  }

  if (currencySelect.value == "euro") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inputCurrencyValue / eurotoday);
  }

  currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-Br", {
    style: "currency",
    currency: "BRL",
  }).format(inputCurrencyValue);
}
function changeCurrency() {
  const currencyName = document.getElementById("currency-name");
  const currencyImage = document.querySelector(".currency-img")
  if (currencySelect.value == "dolar") {
    currencyName.innerHTML = "Dólar americano";
    currencyImage.src = "./assets/d"
  }

  if (currencySelect.value == "euro") {
    currencyName.innerHTML = "Euro";
  }
}

currencySelect.addEventListener("change", changeCurrency);
convertButton.addEventListener("click", convertValue);
