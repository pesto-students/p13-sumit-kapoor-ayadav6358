// Define the counter function that returns a closure
function counter() {
    let count = 0; // This variable is captured by the closure
  
    return function() {
      count++;
      return count;
    };
  }
  
  // Create two instances of the counter function
  const firstCounter = counter();
  const secondCounter = counter();
  
  // Call the firstCounter function five times and store the returned values
  const firstValues = [];
  for (let i = 0; i < 5; i++) {
    firstValues.push(firstCounter());
  }
  
  // Call the secondCounter function three times and store the returned values
  const secondValues = [];
  for (let i = 0; i < 3; i++) {
    secondValues.push(secondCounter());
  }
  
  // Print the arrays
  console.log("firstValues array:", firstValues); // Output: [1, 2, 3, 4, 5]
  console.log("secondValues array:", secondValues); // Output: [1, 2, 3]
  