const randomNum = Math.floor(Math.random() * 10) + 1;

const userGuess = parseInt(prompt("Schätzen Sie die Nummer zwischen 1 und 10:")!, 10);

if (userGuess === randomNum) {
    console.log(`Glückwunsch! Sie haben die Zahl erraten: ${randomNum}`);
} else {
    console.log(`Leider falsch! ${randomNum}`);
}