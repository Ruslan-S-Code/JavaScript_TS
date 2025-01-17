enum Weekday {
  Monday = "Monday",
  Tuesday = "Tuesday",
  Wednesday = "Wednesday",
  Thursday = "Thursday",
  Friday = "Friday",
  Saturday = "Saturday",
  Sunday = "Sunday",
}

enum Month {
  January = "January",
  February = "February",
  March = "March",
  April = "April",
  May = "May",
  June = "June",
  July = "July",
  August = "August",
  September = "September",
  October = "October",
  November = "November",
  December = "December",
}

// Выводим дни недели
console.log("Weekdays:");
for (const day of Object.values(Weekday)) {
  console.log(day);
}

// Выводим месяцы года
console.log("\nMonths:");
for (const month of Object.values(Month)) {
  console.log(month);
}
