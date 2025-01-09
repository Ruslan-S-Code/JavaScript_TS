const passwordInput = document.getElementById("passwordInput") as HTMLInputElement;
const checkButton = document.getElementById("checkButton") as HTMLButtonElement;
const resultText = document.getElementById("resultText") as HTMLElement;

// Button
checkButton.addEventListener("click", () => {
    const password = passwordInput.value;
    const isSecure = password.length >= 8;
    const result = isSecure ? "Welcome in your account" : "The password is too short";


    resultText.textContent = result;
    resultText.style.color = isSecure ? "green" : "red";
});