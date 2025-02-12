// Импортируем классы
import { SchoolClass } from "./SchoolClass";
import { Person } from "./Person";

// Создаем школьный класс
const mathClass = new SchoolClass("101", "Mathematics");

// Создаем массив данных для людей
const peopleData = [
  {
    id: "1",
    firstName: "Alice",
    lastName: "Johnson",
    birthday: new Date(1988, 4, 20),
  },
  {
    id: "2",
    firstName: "Bob",
    lastName: "Smith",
    birthday: new Date(1987, 9, 15),
  },
  {
    id: "3",
    firstName: "Charlie",
    lastName: "Brown",
    birthday: new Date(1988, 11, 30),
  },
];

// Добавляем людей в класс с помощью цикла
peopleData.forEach((data) => {
  const person = new Person(
    data.id,
    data.firstName,
    data.lastName,
    data.birthday
  );
  mathClass.addPerson(person);
});

// Выводим всех людей в классе
mathClass.printAllPersons();
