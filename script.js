const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");

let currentInput = "";
let resetNext = false;

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const value = btn.textContent;

    if (btn.classList.contains("clear")) {
      currentInput = "";
      display.textContent = "0";
      return;
    }

    if (btn.classList.contains("equal")) {
      try {
        currentInput = eval(currentInput).toString();
        display.textContent = currentInput;
      } catch {
        display.textContent = "Error";
      }
      return;
    }

    // If first digit is 0, replace it
    if (display.textContent === "0" && !isNaN(value)) {
      currentInput = value;
    } else {
      currentInput += value;
    }

    display.textContent = currentInput;
  });
});
