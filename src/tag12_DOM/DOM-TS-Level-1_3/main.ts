class Gallery {
  // Селектор для секции gallery
  private gallerySection: HTMLElement;

  constructor() {
    // Инициализация секции gallery
    this.gallerySection = document.getElementById("gallery") as HTMLElement;
    this.createFigures();
  }

  // Метод для создания и добавления figure-элементов
  private createFigures(): void {
    // Данные для изображений и подписей
    const images = [
      {
        src: "https://images.unsplash.com/photo-1472491235688-bdc81a63246e?q=80&w=5070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "",
        caption: "Beautiful Cat",
      },
      {
        src: "https://images.unsplash.com/photo-1511044568932-338cba0ad803?q=80&w=5070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "",
        caption: "Sweet Cat",
      },
      {
        src: "https://images.unsplash.com/photo-1489084917528-a57e68a79a1e?q=80&w=5070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "",
        caption: "Funny Cat",
      },
    ];

    // Перебираем массив и создаем figure для каждого изображения
    images.forEach((image) => {
      // Создаем элемент figure
      const figure = document.createElement("figure");

      // Создаем элемент img
      const img = document.createElement("img");
      img.src = image.src;
      img.alt = image.alt;

      // Создаем элемент figcaption
      const figcaption = document.createElement("figcaption");
      figcaption.textContent = image.caption;

      // Добавляем img и figcaption в figure
      figure.appendChild(img);
      figure.appendChild(figcaption);

      // Добавляем figure в секцию gallery
      this.gallerySection.appendChild(figure);
    });
  }
}

// Запуск при загрузке страницы
window.addEventListener("load", () => new Gallery());
