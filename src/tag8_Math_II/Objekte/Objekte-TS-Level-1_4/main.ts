// Тип Pet
type Pet = {
    tiertyp: string;
    namen: string[];
};

// Предопределенный массив наших питомцев
const unsereHaustiere: Pet[] = [
{
    tiertyp: 'Katze',
    namen: ['Gipsy', 'Nala', 'Dinky']
},
{
    tiertyp: 'Hunde',
    namen: ['Knöpfchen', 'Pinselchen', 'Droopy']
}
];

// 1. Доступ к значениям "Nala" и "Droopy" и их вывод в консоль
console.log('Katze - Nala:', unsereHaustiere[0].namen[1]);
console.log('Hunde - Droopy:', unsereHaustiere[1].namen[2]);

// 2. Вывод всех имен собак
console.log('Alle Hundenamen:', unsereHaustiere[1].namen.join(', '));

// 3. Изменение "Droopy" на "Snoppy" и "Dinky" на "Pinky"
unsereHaustiere[1].namen[2] = 'Snoppy'; // Hunde - Droopy -> Snoppy
unsereHaustiere[0].namen[2] = 'Pinky'; // Katze - Dinky -> Pinky

// 4. Создание нового объекта "Hamster" и добавление его в массив
const hamster: Pet = {
    tiertyp: 'Hamster',
    namen: ['Hugo', 'Lilo']
};

unsereHaustiere.push(hamster);

// 5. Проверка обновленного массива
console.log('Updated Haustiere Array:', unsereHaustiere);