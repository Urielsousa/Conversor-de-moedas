const convertButton = document.querySelector(".convertButton");

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
  console.log(convertedValue);
  currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-Br", {
    style: "currency",
    currency: "BRL",
  }).format(inputCurrencyValue);

  currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(convertedValue);
}

convertButton.addEventListener("click", convertValue);
