const homeScoreElement = document.getElementById("homeScore") as HTMLParagraphElement;
const awayScoreElement = document.getElementById("awayScore") as HTMLParagraphElement;

// Начальные значения счета
let homeScore = 0;
let awayScore = 0;

// Функция обновления счета
function updateScore() {
    homeScoreElement.textContent = homeScore.toString();
    awayScoreElement.textContent = awayScore.toString();
}

// Обработчик кнопок для добавления очков
const buttons = document.querySelectorAll<HTMLButtonElement>("button[data-team]");
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const team = button.getAttribute("data-team");
        const points = parseInt(button.getAttribute("data-points") || "0", 10);

        if (team === "home") {
            homeScore += points;
        } else if (team === "away") {
            awayScore += points;
        }
        updateScore();
    });
});

// Обработчик кнопки сброса
const resetButton = document.getElementById("reset") as HTMLButtonElement;
resetButton.addEventListener("click", () => {
    homeScore = 0;
    awayScore = 0;
    updateScore();
});