const display = document.getElementById("calcDisplay") as HTMLInputElement;
const buttons = document.querySelectorAll(".btn");

let currentInput = "";


function updateDisplay(value: string) {
    display.value = value || "0";
}


buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const value = button.getAttribute("data-value");

        if (button.classList.contains("clear")) {
            
            currentInput = "";
            updateDisplay(currentInput);
        } else if (button.classList.contains("equal")) {
            
            try {
                currentInput = eval(currentInput).toString();
                updateDisplay(currentInput);
            } catch {
                updateDisplay("");
                currentInput = "";
            }

        } else if (value) {
            
            if (currentInput === "0" && value === "0") {
                return;
            }

            if (currentInput === "0" && value === ",") {
                if (!currentInput.includes(",")) {
                    currentInput += value;
                }
            } else {
                if (currentInput === "0" && value !== ",") {
                    currentInput = value;
                } else {
                    currentInput += value;
                }
            }

            updateDisplay(currentInput);
        }
    });
});