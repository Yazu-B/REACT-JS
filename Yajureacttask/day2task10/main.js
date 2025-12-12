import { API_BASE_URL } from "./config.js";
import { formatCurrency } from "./utils.js";

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  getInfo() {
    return `Product: ${this.name}, Price: ${formatCurrency(this.price)}`;
  }
}

// Simulate fetching product list
function fetchProducts() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = Math.random() > 0.3; // 70% chance success
      if (success) {
        resolve([
          new Product("TV", 50000),
          new Product("Milk", 500),
          new Product("Phone", 80000)
        ]);
      } else {
        reject("Failed to fetch product list.");
      }
    }, 1000);
  });
}

async function runApp() {
  console.log("API Base URL:", API_BASE_URL);
  try {
    const products = await fetchProducts();
    console.log("Product List:");
    products.forEach(p => console.log(p.getInfo()));
  } catch (error) {
    console.log("Error:", error);
  }
}