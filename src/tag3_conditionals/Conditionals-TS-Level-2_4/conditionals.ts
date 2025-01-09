const randomNumberIfElse1 = Math.floor(Math.random() * 77) + 1;
const randomNumberIfElse2 = Math.floor(Math.random() * 77) + 1;


console.log(`(If-Else) Erste Zahl: ${randomNumberIfElse1}, Zweite Zahl: ${randomNumberIfElse2}`);


if (randomNumberIfElse1 === randomNumberIfElse2) {
    console.log("Was für ein Zufall");
} else if (randomNumberIfElse1 > randomNumberIfElse2) {
    console.log("Erste Zahl größer");
} else {
    console.log("Zweite Zahl größer");
}

const randomNumberSwitch1 = Math.floor(Math.random() * 77) + 1;
const randomNumberSwitch2 = Math.floor(Math.random() * 77) + 1;


console.log(`(Switch) Erste Zahl: ${randomNumberSwitch1}, Zweite Zahl: ${randomNumberSwitch2}`);

switch (true) {
    case randomNumberSwitch1 === randomNumberSwitch2:
        console.log("Was für ein Zufall");
        break;
    case randomNumberSwitch1 > randomNumberSwitch2:
        console.log("Erste Zahl größer");
        break;
    case randomNumberSwitch1 < randomNumberSwitch2:
        console.log("Zweite Zahl größer");
        break;
}
