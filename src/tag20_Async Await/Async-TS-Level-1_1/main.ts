import { waitForTwoSeconds } from "./patient-waiter";

async function main() {
  console.log("Hi, here I am...");

  // Вызываем waitForTwoSeconds без await
  waitForTwoSeconds();

  console.log("Hello...");
  console.log("Can you hear me...");
}

// Вызываем функцию main
main();
