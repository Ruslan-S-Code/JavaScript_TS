import { WeatherType } from "./weather";

function getWeatherForecast(): Promise<WeatherType> {
  return new Promise((resolve, reject) => {
    const randomValue = Math.floor(Math.random() * 10); // Генерируем случайное число от 0 до 9

    if (randomValue >= 0 && randomValue <= 6) {
      resolve(randomValue as WeatherType); // Возвращаем соответствующий тип погоды
    } else {
      reject("Weather forecast could not be determined"); // Отклоняем промис с ошибкой
    }
  });
}

// Используем промис
getWeatherForecast()
  .then((weather) => {
    console.log(`The weather forecast is: ${WeatherType[weather]}`); // Выводим тип погоды
  })
  .catch((error) => {
    console.error(error); // Выводим ошибку
  });
