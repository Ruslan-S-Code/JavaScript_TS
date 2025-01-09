// Push-Methode // добавляет элемент в конец массива
let numbersPush: number [] = [23, 54, 75];
console.log (numbersPush);
console.log (numbersPush.length);

numbersPush.push (11, 32, 42, 5, 71);
console.log (numbersPush);
console.log (numbersPush.length);




// Unshift-Methode // добавляет элемент в начало массива
let numbersUnshift: number [] = [23, 54, 75];
console.log (numbersUnshift);
console.log (numbersUnshift.length);

numbersUnshift.unshift (11, 32, 42, 5, 71);
console.log (numbersUnshift);
console.log (numbersUnshift.length);



// Shift-Methode // удаляет первый элемент массива
let numbersShift: number [] = [23, 54, 75];
console.log (numbersShift);
console.log (numbersShift.length);

let removedShiftValue1 = numbersShift.shift ();
let removedShiftValue2 = numbersShift.shift ();
console.log (removedShiftValue1, removedShiftValue2);
console.log (numbersShift);



// Pop-Methode // удаляет последний элемент массива
let numbersPop: number [] = [23, 54, 75];
console.log (numbersPop);
console.log (numbersPop.length);

let removedPopValue1 = numbersPop.pop ();
let removedPopValue2 = numbersPop.pop ();
console.log (removedPopValue1, removedPopValue2);
console.log (numbersPop);