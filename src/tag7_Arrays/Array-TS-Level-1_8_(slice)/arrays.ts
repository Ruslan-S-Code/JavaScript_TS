// Definition der Arrays
let lieblingsReiseZiele: string [] = ["Köln", "Paris", "London", "Tokio", "New York"];

lieblingsReiseZiele.splice (1, 2, "Kiew", "Sydney");
console.log (lieblingsReiseZiele);

let nichtLieblinsReiseZiele: string [] = lieblingsReiseZiele.slice (1, 3);
console.log (nichtLieblinsReiseZiele);

console.log (lieblingsReiseZiele);