document.getElementById('search-button').addEventListener('click', () => {
    // Получаем значение из поля ввода
    const searchWord = document.getElementById('search-input').value.trim();
  
    // Находим элемент статьи
    const articleElement = document.getElementById('article');
  
    // Проверяем, что слово для поиска не пустое
    if (searchWord.length > 0) {
      // Получаем исходный текст статьи
      const originalText = articleElement.innerText;
  
      // Создаём регулярное выражение для поиска слова (учитываем регистр)
      const regex = new RegExp(`(${searchWord})`, 'gi');
  
      // Заменяем все найденные слова на обёрнутые в <span>
      const highlightedText = originalText.replaceAll(
        regex,
        '<span class="highlight">$1</span>'
      );
  
      // Обновляем HTML статьи
      articleElement.innerHTML = highlightedText;
    } else {
      // Если поле пустое, восстанавливаем оригинальный текст
      articleElement.innerHTML = articleElement.innerText;
    }
  });