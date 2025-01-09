type Musik = {
    kunstler: string;
    title: string;
    release_jahr: number;
    formate: string[];
    gold: boolean;
};

const meineTopVier: Musik[] = [
    {
        kunstler: 'The Beatles',
        title: 'Abbey Road',
        release_jahr: 1969,
        formate: ['LP', 'CD', 'MC', 'Download'],
        gold: true
    },
    {
        kunstler: 'Pink Floyd',
        title: 'Dark Side of the Moon',
        release_jahr: 1978,
        formate: ['CS', 'CD', 'LP', 'Download'],
        gold: true
    },
    {
        kunstler: 'Led Zeppelin',
        title: 'Led Zeppelin IV',
        release_jahr: 1971,
        formate: ['CS', 'LP', 'Download'],
        gold: true
    },
    {
        kunstler: 'Metallica',
        title: 'Kill ’Em All und Ride the Lightning',
        release_jahr: 1983,
        formate: ['LP', 'CD', 'MC', 'Download'],
        gold: true
    }
];

// Доступ к данным и вывод в консоль
console.log(meineTopVier[0].kunstler);               // The Beatles
console.log(meineTopVier[1].formate[3]);              // Download
console.log(meineTopVier[1].gold);                   // true
console.log(meineTopVier[2].release_jahr);           // 1971
console.log(meineTopVier[3].formate[2]);              // MC
console.log(meineTopVier[3].title.split('und')[1]);  // Ride

// Создание нового объекта типа Musik
const neuePlatte: Musik = {
    kunstler: 'Nirvana',
    title: 'Nevermind',
    release_jahr: 1991,
    formate: ['LP', 'CD', 'Download'],
    gold: true
};

// Добавляем новую запись в массив
meineTopVier.push(neuePlatte);

// Вывод массива с новой записью
console.log(meineTopVier);  // Массив с новой пластинкой