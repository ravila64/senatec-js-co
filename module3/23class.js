class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name); // call the super class constructor and pass in the name parameter
  }

  speak() {
    console.log(`${this.name} barks.`);
  }
}

const d = new Dog("Mitzie");
const f = new Animal("Leopardo");
d.speak(); // Mitzie barks.
f.speak();

// other class
class Cat {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Lion extends Cat {
  speak() {
    super.speak(); // llamando el speak de la clase padre
    console.log(`${this.name} roars.`);
  }
}

const l = new Lion("Fuzzy");
l.speak();
// Fuzzy makes a noise.
// Fuzzy roars.

// other examples class
// Human Class
class Human {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  sayHello() {
    console.log(`Hello, I'm ${this.firstName}`);
  }
}

class Developer extends Human {
  constructor(firstName, lastName,age, city) {
    super(firstName, lastName)
    this.age=age;
    this.city=city;
    // Add other methods
    this.mayorDeEdad=function(){
      if (this.age >=18) {
        return true;
      }else {
        return false;
      }
    }
    this.miCiudad=function(){
      console.log("Ciudad "+this.city);
    }
  }
}

const dev=new Developer("Rene","Avila",60,"Bogota");
console.log(dev.firstName);
console.log(dev.lastName);
console.log(dev.sayHello());
if(dev.mayorDeEdad()){
  console.log("Es mayor de edad");
}else{
  console.log("Es un pollito");
}
dev.miCiudad();

// return en funciones
function Human5 (firstName, lastName) {
  return {
    firstName,
    lastName,
    sayHello () {
      console.log(`Hello, I'm ${firstName}`)
    }
  }
}
const variable = Human5("Juan","Valdez"); // no lleva new
console.log(variable.firstName);
console.log(variable.lastName);
console.log(variable.sayHello());
//
