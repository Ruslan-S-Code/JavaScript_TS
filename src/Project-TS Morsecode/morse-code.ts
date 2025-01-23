// morse-code.ts

let morseAlphabet = [
  { letter: "1", morseCode: ".----" },
  { letter: "2", morseCode: "..---" },
  { letter: "3", morseCode: "...--" },
  { letter: "4", morseCode: "....-" },
  { letter: "5", morseCode: "....." },
  { letter: "6", morseCode: "-...." },
  { letter: "7", morseCode: "--..." },
  { letter: "8", morseCode: "---.." },
  { letter: "9", morseCode: "----." },
  { letter: "0", morseCode: "-----" },
  { letter: " ", morseCode: "    " },
  { letter: "A", morseCode: ".-" },
  { letter: "B", morseCode: "-..." },
  { letter: "C", morseCode: "-.-." },
  { letter: "D", morseCode: "-.." },
  { letter: "E", morseCode: "." },
  { letter: "F", morseCode: "..-." },
  { letter: "G", morseCode: "--." },
  { letter: "H", morseCode: "...." },
  { letter: "I", morseCode: ".." },
  { letter: "J", morseCode: ".---" },
  { letter: "K", morseCode: "-.-" },
  { letter: "L", morseCode: ".-.." },
  { letter: "M", morseCode: "--" },
  { letter: "N", morseCode: "-." },
  { letter: "O", morseCode: "---" },
  { letter: "P", morseCode: ".--." },
  { letter: "Q", morseCode: "--.-" },
  { letter: "R", morseCode: ".-." },
  { letter: "S", morseCode: "..." },
  { letter: "T", morseCode: "-" },
  { letter: "U", morseCode: "..-" },
  { letter: "V", morseCode: "...-" },
  { letter: "W", morseCode: ".--" },
  { letter: "X", morseCode: "-..-" },
  { letter: "Y", morseCode: "-.--" },
  { letter: "Z", morseCode: "--.." },
];

function convertToMorse(text: string): string {
  return text
    .toUpperCase()
    .split("")
    .map((char) => {
      const found = morseAlphabet.find((item) => item.letter === char);
      return found ? found.morseCode : "";
    })
    .join(" ");
}

// Функция для автоматического изменения высоты текстового поля
function autoResizeTextarea(textarea: HTMLTextAreaElement) {
  textarea.style.height = "auto"; // Сбрасываем высоту
  textarea.style.height = `${textarea.scrollHeight}px`; // Устанавливаем высоту в зависимости от содержимого
}

document.getElementById("convertButton")?.addEventListener("click", () => {
  const inputText = (
    document.getElementById("inputText") as HTMLTextAreaElement
  ).value;
  const outputText = convertToMorse(inputText);
  const outputTextarea = document.getElementById(
    "outputText"
  ) as HTMLTextAreaElement;
  outputTextarea.value = outputText;
  autoResizeTextarea(outputTextarea); // Изменяем высоту текстового поля вывода
});

// Добавляем обработчик события для изменения высоты текстового поля ввода
const inputTextarea = document.getElementById(
  "inputText"
) as HTMLTextAreaElement;
inputTextarea.addEventListener("input", () =>
  autoResizeTextarea(inputTextarea)
);

// Инициализируем высоту текстового поля при загрузке
autoResizeTextarea(inputTextarea);
