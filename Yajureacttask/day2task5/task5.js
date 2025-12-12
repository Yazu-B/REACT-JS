class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
 getInfo() {
    return `Product: ${this.name}, Price: $${this.price}`;
  }
}
const phone = new Product("Iphone", 80000);
console.log(phone.getInfo());