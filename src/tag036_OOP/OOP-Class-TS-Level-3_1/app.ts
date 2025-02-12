import { Series } from "./Series";
import { Episode } from "./Episode";
import { Actor } from "./Actor";

function printSeriesInfo(series: Series): void {
  console.log(`Title: ${series.title}`);
  console.log(`Description: ${series.description}`);
  console.log(`Start Year: ${series.startYear}`);
  console.log(`End Year: ${series.endYear ?? "Ongoing"}`);
  console.log(`Number of Episodes: ${series.episodes.length}\n`);

  // Собираем всех актеров из всех эпизодов
  const allActors = series.episodes.flatMap((episode) => episode.actors);

  // Удаляем дубликаты актеров
  const uniqueActors = Array.from(
    new Map(
      allActors.map((actor) => [`${actor.firstName} ${actor.lastName}`, actor])
    ).values()
  );

  console.log("Actors:");
  uniqueActors.forEach((actor) => {
    console.log(`- ${actor.firstName} ${actor.lastName}`);
    console.log(`  - Birthday: ${actor.birthday.toISOString().split("T")[0]}`);
    console.log(`  - Gender: ${actor.gender}`);
  });
}

// Создаем актеров
const robertDowneyJr = new Actor(
  "Robert",
  "Downey Jr.",
  new Date(1965, 3, 4),
  "Male"
); // Железный человек
const scarlettJohansson = new Actor(
  "Scarlett",
  "Johansson",
  new Date(1984, 10, 22),
  "Female"
); // Чёрная вдова
const chrisHemsworth = new Actor(
  "Chris",
  "Hemsworth",
  new Date(1983, 7, 11),
  "Male"
); // Тор
const emiliaClarke = new Actor(
  "Emilia",
  "Clarke",
  new Date(1986, 9, 23),
  "Female"
); // Дейенерис Таргариен
const kitHarington = new Actor(
  "Kit",
  "Harington",
  new Date(1986, 11, 26),
  "Male"
); // Джон Сноу

// Создаем эпизоды
const episode1 = new Episode(
  "Iron Man Begins",
  60,
  "Tony Stark builds his first suit and becomes Iron Man.",
  [robertDowneyJr]
);
const episode2 = new Episode(
  "The Black Widow Strikes",
  45,
  "Natasha Romanoff faces her past.",
  [scarlettJohansson, robertDowneyJr]
);
const episode3 = new Episode(
  "The God of Thunder",
  50,
  "Thor battles Loki to save Asgard.",
  [chrisHemsworth, robertDowneyJr]
);
const episode4 = new Episode(
  "Mother of Dragons",
  55,
  "Daenerys Targaryen hatches her dragon eggs.",
  [emiliaClarke]
);
const episode5 = new Episode(
  "The Battle of Winterfell",
  60,
  "Jon Snow leads the fight against the White Walkers.",
  [kitHarington, emiliaClarke]
);

// Создаем сериалы
const avengersSeries = new Series(
  "The Avengers Saga",
  "A story of Earth's mightiest heroes who fight against global threats.",
  2012,
  2019,
  [episode1, episode2, episode3]
);

const gameOfThronesSeries = new Series(
  "Game of Thrones",
  "A tale of power, betrayal, and dragons in the Seven Kingdoms.",
  2011,
  2019,
  [episode4, episode5]
);

// Вызываем функцию для вывода информации
printSeriesInfo(avengersSeries);
printSeriesInfo(gameOfThronesSeries);
