const myTombol = document.getElementById("myTombol");

function convertTemperature() {
  let result;
  let degree = Number(document.getElementById("myInput").value);
  let unitSelect = document.getElementById("unitSelect").value;
  let convertSelect = document.getElementById("convertSelect").value;
  let temp;
  switch (unitSelect + " " + convertSelect) {
    case "celcius fahrenheit":
      temp = "°F";
      result = (degree * 9) / 5 + 32;
      break;
    case "celcius kelvin":
      result = degree + 273;
      temp = "K";
      break;
    case "kelvin celcius":
      result = degree - 273;
      temp = "°C";
      break;
    case "kelvin fahrenheit":
      result = ((degree - 273) * 9) / 5 + 32;
      temp = "°F";
      break;
    case "fahrenheit celcius":
      result = ((degree - 32) * 5) / 9;
      temp = "°C";
      break;
    case "fahrenheit kelvin":
      result = ((degree - 32) * 5) / 9 + 273;
      temp = "K";
      break;
    default:
      result = degree;
      temp =
        unitSelect === "celcius"
          ? "°C"
          : unitSelect === "fahrenheit"
          ? "°F"
          : "K";
      break;
  }
  document.getElementById("convertResult").textContent = result + temp;
}

myTombol.onclick = function () {
  convertTemperature();
};
