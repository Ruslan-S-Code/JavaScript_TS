// Работаем на основе Map с любимыми группами и участниками
const favoriteBands = new Map<string, string[]>([
    ["The Beatles", ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"]],
    ["Queen", ["Freddie Mercury", "Brian May", "Roger Taylor", "John Deacon"]],
    ["Pink Floyd", ["Roger Waters", "David Gilmour", "Nick Mason", "Richard Wright"]],
    ["Metallica", ["James Hetfield", "Lars Ulrich", "Kirk Hammett", "Robert Trujillo"]],
    ["U2", ["Bono", "The Edge", "Adam Clayton", "Larry Mullen Jr."]]
]);

// 1. Перебираем Map и проверяем длину имени каждого участника
favoriteBands.forEach((members, band) => {
    members.forEach(member => {
        if (member.length > 12) {
            console.log(`Band: ${band}, Member: ${member}, Length: ${member.length}`);
        }
    });
});
