// Создаем класс Person
export class Person {
  id: string;
  firstName: string;
  lastName: string;
  birthday: Date;

  constructor(id: string, firstName: string, lastName: string, birthday: Date) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = birthday;
  }
}
