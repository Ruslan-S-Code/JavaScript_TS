// Список слов
const words = [
  "Abendbrot",
  "Brueckentag",
  "Erklaerungsnot",
  "Fingerspitzengefuehl",
  "Fremdschaemen",
  "Geborgenheit",
  "Geschmacksverirrung",
  "Schweinehund",
  "Kopfkino",
  "Kummerspeck",
  "Schnapsidee",
  "Torschlusspanik",
  "verabredet",
  "verschlimmbessern",
  "Vorfreude",
  "Weltschmerz",
  "Zeitgeist",
  "Zugzwang",
];

let selectedWord: string; // Загаданное слово
let attempts: number; // Оставшиеся попытки
let guessedLetters: string[] = []; // Угаданные буквы
let timerInterval: number | null = null; // Интервал для таймера
let timeLeft: number; // Оставшееся время (в секундах)
let canUseHint = true; // Разрешена ли подсказка

// Выбор элементов DOM
const wordDisplay = document.getElementById("wordDisplay")!;
const lettersDiv = document.getElementById("letters")!;
const messageDiv = document.getElementById("message")!;
const hintButton = document.getElementById("hintButton")!;
const startButton = document.getElementById("startButton")!;
const difficultyRadios = document.getElementsByName(
  "difficulty"
) as NodeListOf<HTMLInputElement>;
const timerDiv = document.createElement("div"); // Для отображения таймера
timerDiv.classList.add("timer");
document.querySelector(".container")?.appendChild(timerDiv);

// Функция для старта игры
function startGame() {
  guessedLetters = [];
  canUseHint = true;
  messageDiv.textContent = "";
  lettersDiv.innerHTML = "";
  timerDiv.textContent = "";
  if (timerInterval) clearInterval(timerInterval);

  // Установка сложности
  const difficulty =
    Array.from(difficultyRadios).find((radio) => radio.checked)?.value ||
    "easy";

  // Задаем параметры на основе выбранной сложности
  switch (difficulty) {
    case "easy":
      attempts = 5;
      timeLeft = 180; // 3 минуты
      break;
    case "medium":
      attempts = 3;
      timeLeft = 120; // 2 минуты
      break;
    case "hard":
      attempts = 1;
      timeLeft = 60; // 1 минута
      break;
    default:
      attempts = 5;
      timeLeft = 180;
      break;
  }

  selectedWord = words[Math.floor(Math.random() * words.length)].toUpperCase();

  // Отображаем начальное количество попыток
  messageDiv.textContent = `Attempts left: ${attempts}`;
  displayWord();
  createLetterButtons();
  startTimer();
}

// Отображение слова
function displayWord() {
  wordDisplay.textContent = selectedWord
    .split("")
    .map((letter) => (guessedLetters.includes(letter) ? letter : "_"))
    .join(" ");
}

// Создание кнопок A-Z
function createLetterButtons() {
  for (let i = 65; i <= 90; i++) {
    const letter = String.fromCharCode(i);
    const button = document.createElement("button");
    button.textContent = letter;
    button.onclick = () => handleLetterClick(letter);
    lettersDiv.appendChild(button);
  }
}

// Обработка клика по букве
function handleLetterClick(letter: string) {
  const buttons = lettersDiv.querySelectorAll("button");
  const button = Array.from(buttons).find((btn) => btn.textContent === letter)!;
  button.disabled = true;

  if (selectedWord.includes(letter)) {
    guessedLetters.push(letter);
    displayWord();
    checkWin();
    canUseHint = true; // Разрешаем подсказку
  } else {
    attempts--;
    messageDiv.textContent = `Attempts left: ${attempts}`;
    if (attempts <= 0) endGame(false);
  }
}

// Обновлённый обработчик подсказки
hintButton.onclick = () => {
  if (!canUseHint) {
    messageDiv.textContent = "Guess a letter before using another hint!";
    return;
  }

  const hiddenLetters = selectedWord
    .split("")
    .filter((letter) => !guessedLetters.includes(letter));

  if (hiddenLetters.length > 0) {
    const hintLetter =
      hiddenLetters[Math.floor(Math.random() * hiddenLetters.length)];
    guessedLetters.push(hintLetter);
    displayWord();
    messageDiv.textContent = `Hint: opened letter "${hintLetter}".`;
    checkWin();
    canUseHint = false; // Блокируем подсказку
  } else {
    messageDiv.textContent = "All letters are already open!";
  }
};

// Запуск таймера
function startTimer() {
  timerDiv.textContent = `Remaining Time: ${formatTime(timeLeft)}`;
  timerInterval = setInterval(() => {
    timeLeft--;
    timerDiv.textContent = `Remaining Time: ${formatTime(timeLeft)}`;
    if (timeLeft <= 0) {
      clearInterval(timerInterval!);
      endGame(false);
    }
  }, 1000);
}

// Форматирование времени
function formatTime(seconds: number): string {
  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${minutes}:${secs.toString().padStart(2, "0")}`;
}

// Проверка на победу
function checkWin() {
  const currentWord = selectedWord
    .split("")
    .map((letter) => (guessedLetters.includes(letter) ? letter : "_"))
    .join("");
  if (currentWord === selectedWord) {
    clearInterval(timerInterval!);
    endGame(true);
  }
}

// Завершение игры
function endGame(isWin: boolean) {
  clearInterval(timerInterval!);
  messageDiv.textContent = isWin
    ? "You won! 🎉🎉🎉"
    : `Game Over. The word was: ${selectedWord}`;
  const buttons = lettersDiv.querySelectorAll("button");
  buttons.forEach((button) => (button.disabled = true));
}

// События
startButton.onclick = startGame;
