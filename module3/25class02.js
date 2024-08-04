class Human {
    constructor(firstName, lastName) {
      this.firstName = firstName
      this.lastName = lastName
    }
  
    sayHello () {
      console.log(`Hello, I'm ${this.firstName}`)
    }
  }
  
  class Designer extends Human {
    design (thing) {
      console.log(`${this.firstName} designed ${thing}`)
    }
  }
  
  class Developer extends Designer {
    code (thing) {
      console.log(`${this.firstName} coded ${thing}`)
    }
  }

  const dev=new Developer("Rene", "Avila");
  console.log(dev);
  console.log(dev.firstName);
  console.log(dev.lastName);
  console.log(dev.design.name);
  console.log(dev.code.name);
//
// esto si FUNCIONA
class Car {
  constructor () {
    this.fuel = 50
  }
}
const car = new Car();
console.log(car.fuel); // 50
//
car.fuel = 3000;
console.log(car.fuel); // 3000
//

// variables privadas
class Car2 {
    // Declares private variable
    #fuel 
    constructor () {
      // Use private variable
      this.#fuel = 50
    }
    getFuel () {
        return this.#fuel
      }
    
      setFuel (value) {
        this.#fuel = value
        if (value > 100) this.#fuel = 100
      }
  }

  const car2 = new Car2()
console.log(car2.getFuel()) // 50

car2.setFuel(3000)
console.log(car2.getFuel()) // 100




