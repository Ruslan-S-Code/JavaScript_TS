// Players Data
const johnHeight = 170;
const johnAge = 22;
const meikeHeight = 168;
const meikeAge = 34;

const johnPoints = johnAge * 5 + johnHeight;
const meikePoints = meikeAge * 5 + meikeHeight;

// Output
console.log(`john score: ${johnPoints}`);
console.log(`meike score: ${meikePoints}`);
if (johnPoints > meikePoints) {
    console.log(`John gewinnt das Spiel mit: ${johnPoints}`);
} else if (johnPoints < meikePoints) {
    console.log(`Meike gewinnt das Spiel mit: ${meikePoints}`);
}