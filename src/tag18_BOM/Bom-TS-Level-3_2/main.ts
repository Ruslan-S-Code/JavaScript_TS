class CountdownTimer {
  private intervalId: number | null = null; // Идентификатор интервала
  private remainingTime: number = 0; // Оставшееся время в секундах
  private initialTime: number = 0; // Исходное время в секундах
  private isPaused: boolean = false; // Флаг состояния паузы

  private timeDisplay = document.getElementById("time") as HTMLElement;
  private minutesInput = document.getElementById("minutes") as HTMLInputElement;

  constructor() {
    this.initializeButtons();
  }

  private initializeButtons(): void {
    const startButton = document.getElementById("start-button") as HTMLElement;
    const pauseButton = document.getElementById("pause-button") as HTMLElement;
    const restartButton = document.getElementById(
      "restart-button"
    ) as HTMLElement;
    const resetButton = document.getElementById("reset-button") as HTMLElement;

    startButton.addEventListener("click", () => this.startCountdown());
    pauseButton.addEventListener("click", () => this.togglePause());
    restartButton.addEventListener("click", () => this.restartCountdown());
    resetButton.addEventListener("click", () => this.resetCountdown());
  }

  private startCountdown(): void {
    if (this.intervalId !== null) {
      return; // Таймер уже запущен
    }

    if (this.remainingTime === 0 || !this.isPaused) {
      const minutes = parseInt(this.minutesInput.value, 10);
      if (isNaN(minutes) || minutes <= 0) {
        alert("Bitte geben Sie eine gültige Minutenanzahl ein!");
        return;
      }
      this.remainingTime = minutes * 60; // Устанавливаем оставшееся время
      this.initialTime = this.remainingTime; // Сохраняем исходное время
    }

    this.isPaused = false; // Убираем состояние паузы
    this.updateDisplay();

    this.intervalId = window.setInterval(() => {
      if (this.remainingTime > 0) {
        this.remainingTime--;
        this.updateDisplay();
      } else {
        this.stopCountdown();
        alert("Countdown abgeschlossen!");
      }
    }, 1000);
  }

  private togglePause(): void {
    if (this.intervalId !== null) {
      // Если таймер работает, останавливаем его
      clearInterval(this.intervalId);
      this.intervalId = null;
      this.isPaused = true;
    } else if (this.isPaused) {
      // Если таймер на паузе, продолжаем отсчёт
      this.startCountdown();
    }
  }

  private restartCountdown(): void {
    if (this.intervalId !== null) {
      clearInterval(this.intervalId); // Останавливаем текущий интервал
      this.intervalId = null;
    }
    this.remainingTime = this.initialTime; // Восстанавливаем исходное значение времени
    this.startCountdown(); // Запускаем таймер заново
  }

  private resetCountdown(): void {
    if (this.intervalId !== null) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
    this.remainingTime = 0;
    this.isPaused = false;
    this.updateDisplay();
    this.minutesInput.value = "";
  }

  private stopCountdown(): void {
    if (this.intervalId !== null) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
    this.remainingTime = 0;
    this.updateDisplay();
  }

  private updateDisplay(): void {
    const minutes = Math.floor(this.remainingTime / 60);
    const seconds = this.remainingTime % 60;
    this.timeDisplay.textContent = `${this.padNumber(minutes)}:${this.padNumber(
      seconds
    )}`;
  }

  private padNumber(num: number): string {
    return num < 10 ? `0${num}` : `${num}`;
  }
}

// Запуск при загрузке страницы
window.addEventListener("load", () => new CountdownTimer());
