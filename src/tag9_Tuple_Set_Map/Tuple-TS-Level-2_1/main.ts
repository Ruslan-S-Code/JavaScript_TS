// 1. Создаем тип Tuple для представления сотрудника
type Employee = [number, string, string, number];

// 2. Создаем массив сотрудников
const employees: Employee[] = [
    [1, "Anna Müller", "HR", 45000],
    [2, "Peter Schmidt", "IT", 60000],
    [3, "Laura Becker", "Finance", 55000],
    [4, "Tom Fischer", "Marketing", 50000],
    [5, "Sarah Weber", "Sales", 47000]
];

// 3. Выводим всех сотрудников и их данные на консоль
for (const [id, name, department, annualSalary] of employees) {
    console.log(`ID: ${id}, Name: ${name}, Abteilung: ${department}, Jahresgehalt: ${annualSalary}€`);
}
