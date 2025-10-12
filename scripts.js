const convertButton = document.querySelector(".convertButton");

function convertValue() {
  const inputCurrencyValue = document.querySelector(".input-currency").value;
  const currencyValueToConvert = document.querySelector(
    ".currency-value-to-convert"
  ); // valor em real //
  const convertedCurrencyValue = document.querySelector(
    ".converted-currency-value" // outras moedas
  );

  const dolarToday = 5.2;
  const covnertedValue = inputCurrencyValue / dolarToday;
  console.log(covnertedValue);

 currencyValueToConvert.innerHTML = inputCurrencyValue;
}

convertButton.addEventListener("click", convertValue);
