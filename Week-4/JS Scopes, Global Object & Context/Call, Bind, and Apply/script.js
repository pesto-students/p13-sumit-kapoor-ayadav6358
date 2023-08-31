// Define the Calculator class
class Calculator {
    add(a, b) {
      return a + b;
    }
  
    subtract(a, b) {
      return a - b;
    }
  
    multiply(a, b) {
      return a * b;
    }
  
    divide(a, b) {
      if (b !== 0) {
        return a / b;
      } else {
        throw new Error("Cannot divide by zero");
      }
    }
  }
  
  // Define the ScientificCalculator class that extends Calculator
  class ScientificCalculator extends Calculator {
    square(a) {
      return a * a;
    }
  
    cube(a) {
      return a * a * a;
    }
  
    power(a, b) {
      return Math.pow(a, b);
    }
  }
  
  // Create an instance of the ScientificCalculator class
  const scientificCalculator = new ScientificCalculator();
  
  // Using the "call" method to invoke the "add" method of Calculator class
  const sum = Calculator.prototype.add.call(scientificCalculator, 10, 5);
  console.log("Sum:", sum);
  
  // Using the "apply" method to invoke the "subtract" method of Calculator class
  const difference = Calculator.prototype.subtract.apply(scientificCalculator, [10, 5]);
  console.log("Difference:", difference);
  
  // Using the "bind" method to create a new method "multiplyByTwo"
  const multiplyByTwo = scientificCalculator.multiply.bind(scientificCalculator, 2);
  console.log("Multiply by 2:", multiplyByTwo(5)); // Output: 10
  
  // Using the "bind" method to create a new method "powerOfThree"
  const powerOfThree = scientificCalculator.power.bind(scientificCalculator, 3);
  console.log("Power of 3:", powerOfThree(2)); // Output: 8
  