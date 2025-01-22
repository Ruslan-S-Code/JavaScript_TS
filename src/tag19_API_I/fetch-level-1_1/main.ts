fetch("https://picsum.photos/v2/list")
  .then((response) => {
    console.log("Ответ API:", response);
    return response.json();
  })
  .then((data) => {
    console.log("Данные:", data);
  })
  .catch((error) => {
    console.error("Ошибка API:", error);
  });
