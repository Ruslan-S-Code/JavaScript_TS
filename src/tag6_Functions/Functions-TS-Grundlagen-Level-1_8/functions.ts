function calculateAge(birthYear: number): number {
    const currentYear = new Date(). getFullYear();
    return currentYear - birthYear;
}

const myAge = calculateAge(1993);
console.log ("Mein Alter ist:", myAge);

function compareAges(age1: number, age2: number): number {
    const ageDifference = Math.abs(age1 - age2);
    return ageDifference;
}

const friendAge = calculateAge(1988);
const ageDiff = compareAges (myAge, friendAge);
console.log("Der Altersunterschied ist:", ageDiff);