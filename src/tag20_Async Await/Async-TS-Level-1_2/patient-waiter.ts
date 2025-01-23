export function waitForTwoSeconds(): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Thank you for your patience");
      resolve(); // Разрешаем промис после 2 секунд
    }, 2000); // Ждем 2 секунды
  });
}
