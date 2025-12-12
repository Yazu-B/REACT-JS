class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  getInfo() {
    return `Product: ${this.name}, Price: RS ${this.price}`;
  }
}

class FoodProduct extends Product {
  constructor(name, price, expiryDate) {
    super(name, price);
    this.expiryDate = expiryDate;
  }

  getInfo() {
    return `${super.getInfo()}, Expiry Date: ${this.expiryDate}`;
  }
}

const TV = new Product("TV", 50000);
const milk = new FoodProduct("Milk", 500, "2025-12-20");

console.log(TV.getInfo());
console.log(milk.getInfo());