// Создаем класс SchoolClass
class SchoolClass {
  // Свойства класса
  id: string;
  name: string;
  endDate?: string; // Необязательное свойство, может быть undefined

  // Конструктор класса
  constructor(id: string, name: string) {
    this.id = id; // Инициализация id
    this.name = name; // Инициализация name
    console.log("School class creation successful"); // Вывод сообщения в консоль
  }
}

// Создаем три экземпляра класса SchoolClass
const mathClass = new SchoolClass("101", "Mathematics");
const historyClass = new SchoolClass("102", "History");
const scienceClass = new SchoolClass("103", "Science");

// Изменяем названия для двух экземпляров
mathClass.name = "Advanced Mathematics"; // Изменение имени
historyClass.name = "World History"; // Изменение имени

// Выводим информацию об объектах
console.log(mathClass); // { id: '101', name: 'Advanced Mathematics', endDate: undefined }
console.log(historyClass); // { id: '102', name: 'World History', endDate: undefined }
console.log(scienceClass); // { id: '103', name: 'Science', endDate: undefined }
