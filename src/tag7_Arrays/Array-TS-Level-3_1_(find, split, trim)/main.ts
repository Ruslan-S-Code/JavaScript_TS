const artworks = [
    "Die Sternennacht - Vincent van Gogh",
    "Guernica - Pablo Picasso",
    "Die Geburt der Venus - Sandro Botticelli",
    "Die Nachtwache - Rembrandt",
    "Die Mona Lisa - Leonardo da Vinci",
    "Die Kartoffelesser - Vincent van Gogh",
    "Der Schrei - Edvard Munch",
    "Das letzte Abendmahl - Leonardo da Vinci",
    "Die freudige Botschaft - James Tissot",
    "Der Garten der Lüste - Hieronymus Bosch"
];

const artworkDates = [
    "Die Sternennacht - 1889",
    "Guernica - 1937",
    "Die Geburt der Venus - 1486",
    "Die Nachtwache - 1642",
    "Die Mona Lisa - 1503",
    "Die Kartoffelesser - 1885",
    "Der Schrei - 1893",
    "Das letzte Abendmahl - 1495",
    "Die freudige Botschaft - 1885",
    "Der Garten der Lüste - 1505"
];

// Функция поиска
function findArtwork(artworkName: string) {
    const artwork = artworks.find(art => art.includes(artworkName));
    const artworkDate = artworkDates.find(date => date.includes(artworkName));

    if (artwork && artworkDate) {
        const name = artwork.split(' - ')[0].trim();
        const artist = artwork.split(' - ')[1].trim();
        const year = artworkDate.split(' - ')[1].trim();
        console.log(`'${name}' wurde von ${artist} im Jahre ${year} gemalt`);
    } else {
        console.log(`Artwork ${artworkName} not found`);
    }
}

// Тестирование функции
findArtwork('Die Sternennacht');  // 'Die Sternennacht' wurde von Vincent van Gogh im Jahre 1889 gemalt
findArtwork('Guernica');          // 'Guernica' wurde von Pablo Picasso im Jahre 1937 gemalt
findArtwork('NichtGefunden');     // Artwork NichtGefunden not found