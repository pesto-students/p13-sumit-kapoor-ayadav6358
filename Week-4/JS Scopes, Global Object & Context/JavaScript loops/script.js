function drawTriangle(triangleSize) {
    for (let i = 1; i <= triangleSize; i++) {
      let line = "";
      for (let j = 1; j <= i; j++) {
        line += "*";
      }
      console.log(line);
    }
  }
  
  // Call drawTriangle() to test
  drawTriangle(4);
  