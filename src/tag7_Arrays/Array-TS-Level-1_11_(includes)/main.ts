const string: string = "Peter Piper picked a peck of pickled peppers. How many pickled peppers did Peter Piper pick?";

// Проверка, есть ли подстрока "Piper" в строке (учитывается регистр)
console.log(string.includes("Piper")); // true

// Проверка, есть ли подстрока "piper" в строке (учитывается регистр)
console.log(string.includes("piper")); // false

// Поиск подстроки "peck" начиная с индекса 10
console.log(string.includes("peck", 10)); // true
console.log(string.includes("peck", 20)); // false