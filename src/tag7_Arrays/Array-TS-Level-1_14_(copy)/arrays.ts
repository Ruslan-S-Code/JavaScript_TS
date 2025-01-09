// Создание массива oldHollywoodActors
let oldHollywoodActors: string[] = [
    "Marlon Brando",
    "Audrey Hepburn",
    "Elizabeth Taylor",
    "Cary Grant",
    "Paul Newman",
    "Doris Day"
];

// Создание переменной actorsReference и присвоение ей ссылки на oldHollywoodActors
let actorsReference: string[] = oldHollywoodActors;

// Добавление "Marilyn Monroe" в actorsReference
actorsReference.push("Marilyn Monroe");

// Вывод содержимого массивов
console.log("Content oldHollywoodActors:", oldHollywoodActors);
console.log("Content actorsReference:", actorsReference);

// Создание копии с помощью concat()
let actorsCopyConcat: string[] = oldHollywoodActors.concat();

// Создание копии с помощью slice()
let actorsCopySlice: string[] = oldHollywoodActors.slice();

// Создание копии с помощью Spread Operator
let actorsCopySpread: string[] = [...oldHollywoodActors];

// Изменение значений в копиях
actorsCopyConcat[0] = "James Dean"; // Изменяем первый элемент в копии с concat()
actorsCopySlice[1] = "Grace Kelly"; // Изменяем второй элемент в копии с slice()
actorsCopySpread[2] = "Bette Davis"; // Изменяем третий элемент в копии с Spread Operator

// Вывод содержимого оригинального массива и всех копий
console.log("Content oldHollywoodActors after change:", oldHollywoodActors);
console.log("Content actorsCopyConcat:", actorsCopyConcat);
console.log("Content actorsCopySlice:", actorsCopySlice);
console.log("Content actorsCopySpread:", actorsCopySpread);