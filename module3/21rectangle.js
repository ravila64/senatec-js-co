class Rectangle {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
    // Getter
    get area() {
      return this.height * this.width;
    }
    // Method
    *getSides() {
      yield this.height;
      yield this.width;
      yield this.height;
      yield this.width;
    }
  }
  
  const square = new Rectangle(5, 10);
  
  console.log(square.area); // numero
  console.log([...square.getSides()]); // [10, 10, 10, 10] array
  
  const array=[10,20,30,40,5];
  console.log([...array]);
  console.log(array);
  


