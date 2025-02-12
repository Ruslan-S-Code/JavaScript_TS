// Импортируем класс Person
import { Person } from "./Person";

// Создаем класс SchoolClass
export class SchoolClass {
  id: string;
  name: string;
  endDate?: string;
  persons: Person[]; // Массив объектов Person

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
    this.persons = []; // Инициализируем пустой массив
    console.log("School class creation successful");
  }

  // Метод для добавления человека в массив persons
  addPerson(person: Person): void {
    this.persons.push(person);
  }

  // Метод для вывода всех людей в классе
  printAllPersons(): void {
    console.log(`All persons in class ${this.name}:`);
    this.persons.forEach((person) => {
      console.log(
        `ID: ${person.id}, Name: ${person.firstName} ${
          person.lastName
        }, Birthday: ${person.birthday.toDateString()}`
      );
    });
  }
}
