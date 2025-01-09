const isOnline = Math.random() < 0.5; 
const isPremiumUser = Math.random() < 0.5;
const isAdult = Math.random() < 0.5;

console.log(isOnline ? "online" : "offline");

const monthlyFee = isPremiumUser ? 19.99 : 12.99;
console.log(`Monthly Fee: ${monthlyFee}`);


isAdult ? window.confirm("Willkommen") : window.alert("Keine Berechtigung");

const randomAge = Math.floor(Math.random() * 121);
const randomSalary = Math.floor(Math.random() * 15001);

const isMiddleAged = randomAge >= 40 && randomAge <= 65 ? true : false;
console.log(`Age: ${randomAge}, Middle-aged: ${isMiddleAged}`);

const salaryMessage = randomSalary > 10000 
    ? "You are rich" 
    : randomSalary > 1500 
        ? "Not too bad" 
        : "Not that much";

console.log(`Salary: ${randomSalary}, Message: ${salaryMessage}`);