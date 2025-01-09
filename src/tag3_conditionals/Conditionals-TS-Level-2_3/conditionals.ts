const numbers = [35, 74, 123];


numbers.forEach(number => {
    let difference = number - 27; 
    if (difference > 27) {
        difference *= 2;
    }
    console.log(`Input: ${number}, Result: ${difference}`);
});