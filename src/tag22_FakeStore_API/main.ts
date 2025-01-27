// Типы данных
interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  category: string;
}

interface CartItem {
  product: Product;
  quantity: number;
}

// Переменные
let products: Product[] = [];
let filteredProducts: Product[] = [];
let cart: CartItem[] = [];

// Элементы DOM
const productList = document.getElementById("product-list")!;
const cartItems = document.getElementById("cart-items")!;
const totalPriceEl = document.getElementById("total-price")!;
const categoryFilter = document.getElementById(
  "category-filter"
) as HTMLSelectElement;
const sortFilter = document.getElementById("sort-filter") as HTMLSelectElement;
const searchInput = document.getElementById("search") as HTMLInputElement;

// Функция обновления списка товаров
function renderProducts(productsToRender: Product[]) {
  productList.innerHTML = "";
  productsToRender.forEach((product) => {
    const productEl = document.createElement("div");
    productEl.className = "product";
    productEl.innerHTML = `
        <img src="${product.image}" alt="${product.title}" />
        <h3>${product.title}</h3>
        <p>$${product.price.toFixed(2)}</p>
        <button>Add to Cart</button>
      `;
    productEl
      .querySelector("button")!
      .addEventListener("click", () => addToCart(product));
    productList.appendChild(productEl);
  });
}

// Функция обновления корзины
function updateCart() {
  cartItems.innerHTML = "";
  let totalPrice = 0;

  cart.forEach(({ product, quantity }) => {
    const cartItem = document.createElement("div");
    cartItem.className = "cart-item";
    cartItem.innerHTML = `
        <span>${product.title} (x${quantity})</span>
        <span>$${(product.price * quantity).toFixed(2)}</span>
        <button>Remove</button>
      `;
    cartItem
      .querySelector("button")!
      .addEventListener("click", () => removeFromCart(product));
    cartItems.appendChild(cartItem);
    totalPrice += product.price * quantity;
  });

  totalPriceEl.textContent = `Total: $${totalPrice.toFixed(2)}`;
}

// Функция добавления товара в корзину
function addToCart(product: Product) {
  const existingItem = cart.find((item) => item.product.id === product.id);
  if (existingItem) {
    existingItem.quantity++;
  } else {
    cart.push({ product, quantity: 1 });
  }
  updateCart();
}

// Функция удаления товара из корзины
function removeFromCart(product: Product) {
  cart = cart.filter((item) => item.product.id !== product.id);
  updateCart();
}

// Фильтрация по категориям
function filterByCategory() {
  const category = categoryFilter.value;
  if (category === "all") {
    filteredProducts = [...products];
  } else {
    filteredProducts = products.filter(
      (product) => product.category === category
    );
  }
  renderProducts(filteredProducts);
}

// Сортировка товаров
function sortProducts() {
  const sortValue = sortFilter.value;
  if (sortValue === "price-asc") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortValue === "price-desc") {
    filteredProducts.sort((a, b) => b.price - a.price);
  }
  renderProducts(filteredProducts);
}

// Поиск товаров
function searchProducts() {
  const query = searchInput.value.toLowerCase();
  const searchedProducts = filteredProducts.filter((product) =>
    product.title.toLowerCase().includes(query)
  );
  renderProducts(searchedProducts);
}

// Загрузка товаров из API
async function fetchProducts() {
  const response = await fetch("https://fakestoreapi.com/products");
  products = await response.json();
  filteredProducts = [...products];
  renderProducts(products);
}

// Обработчики событий
categoryFilter.addEventListener("change", filterByCategory);
sortFilter.addEventListener("change", sortProducts);
searchInput.addEventListener("input", searchProducts);

// Инициализация
fetchProducts();

document.addEventListener("DOMContentLoaded", () => {
  const checkoutButton = document.getElementById("checkout-button");
  const modal = document.getElementById("payment-modal")!;
  const closeButton = document.querySelector(".close")!;
  const paymentButtons = document.querySelectorAll(".payment-button");

  // Проверка на наличие checkoutButton
  if (checkoutButton) {
    checkoutButton.addEventListener("click", () => {
      modal.style.display = "flex"; // Показать модальное окно
    });
  }

  // Закрытие модального окна
  closeButton.addEventListener("click", () => {
    modal.style.display = "none"; // Скрыть модальное окно
  });

  // Закрытие модального окна при клике вне контента
  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none"; // Скрыть модальное окно
    }
  });

  // Обработчики для кнопок оплаты
  paymentButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const method = (event.target as HTMLElement).textContent;
      alert(`You selected: ${method}`);
      modal.style.display = "none"; // Скрыть модальное окно
    });
  });
});
