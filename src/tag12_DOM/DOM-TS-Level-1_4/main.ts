class TextLogger {
  private inputField: HTMLInputElement;
  private outputDiv: HTMLElement;

  constructor() {
    // Получаем элементы
    this.inputField = document.getElementById("inputField") as HTMLInputElement;
    this.outputDiv = document.getElementById("output") as HTMLElement;

    // Навешиваем обработчик события на кнопку
    const button = document.getElementById("addButton") as HTMLButtonElement;
    button.addEventListener("click", () => this.addTextWithTimestamp());
  }

  // Функция добавления текста с временной меткой
  private addTextWithTimestamp(): void {
    const inputText = this.inputField.value;
    const timestamp = new Date().toLocaleString();

    // Добавляем текст с временной меткой в div
    if (inputText) {
      this.outputDiv.innerHTML += `<p>${inputText} - ${timestamp}</p>`;
    }
  }
}

// Инициализация
window.addEventListener("DOMContentLoaded", () => new TextLogger());
