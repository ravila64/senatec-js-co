class Cake {
    constructor(lyr) {
        this.layers = lyr + 1;
    }
}

var result = new Cake(1);
console.log(result.layers);

// punto 3
class Animal {
    constructor(lg) {
        this.legs = lg;
    }
}

class Dog extends Animal {
    constructor() {
        super(4);
    }
}

var result = new Dog();
console.log(result.legs);

// question 4
class Animal2 {
    // constructor(age=0){
    //     this.age=age;
    // }
}

class Cat extends Animal2 {
  constructor() {
    super();
    this.noise = "meow";
  }
}

var result = new Animal2();
console.log(result.noise);  
// undefined = no hay parametro noise en class Animal2

// punto 5
class Person {
    sayHello() {
        console.log("Hello Person");
    }
}

class Friend extends Person {
    sayHello() {
        console.log("Hey Friend");
    }
}

var result = new Friend();
result.sayHello();
// imprime Hey

