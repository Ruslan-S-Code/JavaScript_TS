import { createProduct } from "./src/product/ProductFunctions";
import { addProductToService } from "./src/product/ProductServiceFunctions";
import { createOrder } from "./src/order/OrderFunctions";
import { addOrderToService } from "./src/order/OrderServiceFunctions";

createProduct("Laptop", 1500);
addProductToService("Warehouse A", "Laptop");
createOrder(["Laptop", "Phone"]);
addOrderToService("Order Service", "12345");
