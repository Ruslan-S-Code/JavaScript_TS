// 1. Создаем кортеж (Tuple) типа [string, string] с именем starWarsActor
type StarWarsActor = [string, string];

// 2. Создаем массив из кортежей, содержащий информацию о нескольких персонажах и их актерах
const starWarsActors: StarWarsActor[] = [
    ["Luke Skywalker", "Mark Hamill"],
    ["Darth Vader", "James Earl Jones"],
    ["Yoda", "Frank Oz"],
    ["Han Solo", "Harrison Ford"],
    ["Princess Leia", "Carrie Fisher"]
];

// 3. Выводим информацию на консоль с помощью цикла
for (const [character, actor] of starWarsActors) {
    console.log(`${actor} spielt ${character}`);
}
