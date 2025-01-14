function showHallo(): void {
  document.body.innerHTML = "Hallo";
}

const showHalloArrow = (): void => {
  document.body.innerHTML = "Hallo";
};

function sum(a: number, b: number): void {
  console.log(a + b);
}

const sumArrow = (a: number, b: number): void => {
  console.log(a + b);
};

function multiply(a: number, b: number): void {
  window.alert(a * b);
}

const multiplyArrow = (a: number, b: number): void => {
  window.alert(a * b);
};

function logObjectKeys(obj: object): void {
  Object.keys(obj).forEach((key) => console.log(key));
}

const logObjectKeysArrow = (obj: object): void => {
  Object.keys(obj).forEach((key) => console.log(key));
};
