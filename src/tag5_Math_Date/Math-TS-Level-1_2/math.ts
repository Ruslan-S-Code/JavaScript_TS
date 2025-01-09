function roundNumber(num: number): number {
    return Math.round(num);
}

const testNumbers: number[] = [3, 193, 1, -3];

testNumbers.forEach((num) => {
    console.log(roundNumber(num));
});