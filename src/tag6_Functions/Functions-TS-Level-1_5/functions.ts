function multiplyAndDivide(a: number, b: number): void {
    console.log(`Multiplikation von ${a} und ${b}: ${a * b}`);
    if (b === 0) {
        console.error(`Division durch 0 ist nicht erlaubt`);
    }
    else {
        console.log(`Division von ${a} und ${b}: ${a / b}`);
    }
}

multiplyAndDivide(10, 2);
multiplyAndDivide(30, 20);
multiplyAndDivide(100, 100);
multiplyAndDivide(5, 0);
multiplyAndDivide(45, 173);
multiplyAndDivide(1, 1000);