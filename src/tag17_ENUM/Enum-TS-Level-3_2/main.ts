// Определение Enum Permissions
enum Permissions {
  None = 0, // Нет прав
  Read = 1, // Чтение
  Write = 2, // Запись
  Execute = 4, // Выполнение
  Delete = 8, // Удаление
}

// Функция для вывода прав доступа
function checkPermissions(permission: Permissions): void {
  console.log(`Permissions for the value ${permission}:`);

  if (permission >= Permissions.Execute) {
    console.log("Execute (Read and Write)");
  }
  if (permission >= Permissions.Write) {
    console.log("Write (Read)");
  }
  if (permission >= Permissions.Read) {
    console.log("Read");
  }
  if (permission === Permissions.None) {
    console.log("None");
  }
}

// Вызов функции с каждым возможным значением Enum
checkPermissions(Permissions.None); // Выводит: "None"
checkPermissions(Permissions.Read); // Выводит: "Read"
checkPermissions(Permissions.Write); // Выводит: "Write" и "Read"
checkPermissions(Permissions.Execute); // Выводит: "Execute", "Write" и "Read"
checkPermissions(Permissions.Delete); // Выводит: "Delete", "Execute", "Write" и "Read"
