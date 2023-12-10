function convert() {
  // Get the input unit and value.
  const inputUnit = document.getElementById("input-unit").value;
  const inputValue = document.getElementById("input-value").value;

  // Get the output unit.
  const outputUnit = document.getElementById("output-unit").value;

  // Convert the input value to the output unit.
  let outputValue = 0;
  switch (inputUnit) {
    case "feet":
      switch (outputUnit) {
        case "inches":
          outputValue = inputValue * 12;
          break;
        case "meters":
          outputValue = inputValue * 0.3048; /* Correct conversion rate */
          break;
        case "kilometers":
          outputValue = inputValue * 0.0003048; /* Correct conversion rate */
          break;
      }
      break;
    case "inches":
      switch (outputUnit) {
        case "feet":
          outputValue = inputValue / 12;
          break;
        case "meters":
          outputValue = inputValue * 0.0254;
          break;
        case "kilometers":
          outputValue = inputValue * 0.000254; /* Correct conversion rate */
          break;
      }
      break;
    case "meters":
      switch (outputUnit) {
        case "feet":
          outputValue = inputValue * 3.28084;
          break;
        case "inches":
          outputValue = inputValue * 39.37008;
          break;
        case "kilometers":
          outputValue = inputValue * 0.001;
          break;
      }
      break;
    case "kilometers":
      switch (outputUnit) {
        case "feet":
          outputValue = inputValue * 3280.84;
          break;
        case "inches":
          outputValue = inputValue * 39370.08;
          break;
        case "meters":
          outputValue = inputValue * 1000;
          break;
      }
      break;
  }

  // Display the output value.
  document.getElementById("output-value").value = outputValue;
}

// Add an event listener to the convert button.
document.getElementById("convert-button").addEventListener("click", convert);
