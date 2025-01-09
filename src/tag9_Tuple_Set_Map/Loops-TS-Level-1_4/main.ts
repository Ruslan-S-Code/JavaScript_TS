// 1. Объявляем массив friendNames
const friendNames: string[] = ["Georg", "Anass", "Elaine", "Hakan", "Eric", "Kim", "Sergio"];

// 2. Используем обычный for для вывода имён
console.log("Ausgabe mit for-Schleife:");
for (let i = 0; i < friendNames.length; i++) {
    console.log(friendNames[i]);
}

// 3. Используем for...of для вывода имён
console.log("Ausgabe mit for...of-Schleife:");
for (const name of friendNames) {
    console.log(name);
}
