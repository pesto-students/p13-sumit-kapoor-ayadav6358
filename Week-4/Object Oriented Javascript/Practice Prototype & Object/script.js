
// Part 1: Protecting the Object

const person = {
    _name: "John",
    _age: undefined,
    _email: "john@example.com",
  
    get name() {
      return this._name;
    },
  
    get email() {
      return this._email;
    },
  
    set age(age) {
      this._age = age;
    },
  
    getAge() {
      return this._age;
    },
  
    setAge(newAge) {
      this._age = newAge;
    }
  };
  
  person.age = 30;
  console.log("Name:", person.name);
  console.log("Age:", person.getAge());
  console.log("Email:", person.email);
  person.setAge(35);
  console.log("New Age:", person.getAge());
  

//   Part 2: JavaScript Prototype


function Vehicle(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  
  Vehicle.prototype.getDetails = function() {
    return `Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`;
  };
  
  function Car(make, model, year, numDoors) {
    Vehicle.call(this, make, model, year);
    this.numDoors = numDoors;
  }
  
  Car.prototype = Object.create(Vehicle.prototype);
  Car.prototype.constructor = Car;
  Car.prototype.getDetails = function() {
    return `${Vehicle.prototype.getDetails.call(this)}, Num Doors: ${this.numDoors}`;
  };
  
  const vehicleInstance = new Vehicle("Toyota", "Camry", 2023);
  const carInstance = new Car("Honda", "Civic", 2022, 4);
  
  console.log(vehicleInstance.getDetails());
  console.log(carInstance.getDetails());
  