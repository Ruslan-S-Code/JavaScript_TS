function returnOne(): number {
    return 1;
}

const x = 1;

const y = returnOne();

if (x === y) {
    console.log("Wird das gedruckt?");
}