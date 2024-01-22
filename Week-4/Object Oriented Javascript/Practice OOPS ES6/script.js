// Section 1 - Inheritance

class Vehicle {
    constructor(make, model, year, color) {
      this.make = make;
      this.model = model;
      this.year = year;
      this.color = color;
    }
  
    drive() {
      console.log(`Driving ${this.make} ${this.model}.`);
    }
  }
  
  class Car extends Vehicle {
    constructor(make, model, year, color, numSeats) {
      super(make, model, year, color);
      this.numSeats = numSeats;
    }
  }
  
  class RideShareCar extends Car {
    constructor(make, model, year, color, numSeats, isAvailable) {
      super(make, model, year, color, numSeats);
      this.isAvailable = isAvailable;
    }
  }
  
  // Section 2 - Polymorphism
  
  class Shape {
    calculateArea() {
      return 0;
    }
  }
  
  class Rectangle extends Shape {
    constructor(width, height) {
      super();
      this.width = width;
      this.height = height;
    }
  
    calculateArea() {
      return this.width * this.height;
    }
  }
  
  class Triangle extends Shape {
    constructor(base, height) {
      super();
      this.base = base;
      this.height = height;
    }
  
    calculateArea() {
      return (this.base * this.height) / 2;
    }
  }
  
  class Circle extends Shape {
    constructor(radius) {
      super();
      this.radius = radius;
    }
  
    calculateArea() {
      return Math.PI * this.radius * this.radius;
    }
  }
  
  // Section 3 - Abstraction and Encapsulation
  
  class BankAccount {
    #accountNumber;
    #balance;
    #accountHolderName;
  
    constructor(accountNumber, balance, accountHolderName) {
      this.#accountNumber = accountNumber;
      this.#balance = balance;
      this.#accountHolderName = accountHolderName;
    }
  
    deposit(amount) {
      this.#balance += amount;
    }
  
    withdraw(amount) {
      this.#balance -= amount;
    }
  
    getBalance() {
      return this.#balance;
    }
  }
  
  class CheckingAccount extends BankAccount {
    constructor(accountNumber, balance, accountHolderName) {
      super(accountNumber, balance, accountHolderName);
    }
  }
  
  class SavingsAccount extends BankAccount {
    constructor(accountNumber, balance, accountHolderName) {
      super(accountNumber, balance, accountHolderName);
    }
  
    withdraw(amount) {
      if (this.getBalance() - amount >= 0) {
        super.withdraw(amount);
      } else {
        console.log("Insufficient balance for withdrawal.");
      }
    }
  }
  
  // Testing
  
  const rideShareCar = new RideShareCar("Toyota", "Camry", 2023, "Red", 5, true);
  console.log(rideShareCar);
  
  const rectangle = new Rectangle(5, 10);
  console.log("Rectangle Area:", rectangle.calculateArea());
  
  const triangle = new Triangle(8, 6);
  console.log("Triangle Area:", triangle.calculateArea());
  
  const circle = new Circle(4);
  console.log("Circle Area:", circle.calculateArea());
  
  const checking = new CheckingAccount("123456", 1000, "John Doe");
  checking.deposit(500);
  checking.withdraw(300);
  console.log("Checking Balance:", checking.getBalance());
  
  const savings = new SavingsAccount("789012", 2000, "Jane Smith");
  savings.deposit(100);
  savings.withdraw(2500);
  console.log("Savings Balance:", savings.getBalance());
  