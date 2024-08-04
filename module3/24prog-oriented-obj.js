function Human (firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
  }

const chris = new Human('Chris', 'Coyier')
console.log(chris.firstName) // Chris
console.log(chris.lastName) // Coyier

const zell = new Human('Zell', 'Liew')
console.log(zell.firstName) // Zell
console.log(zell.lastName) // Liew
//

function Human2 (firstName, lastName) {
    return {
      firstName,
      lastName
    }
  }

  // cuando la function lleva return, al instanciar no lleva NEW
const chris2 = Human2('Chris', 'Coyier')
console.log(chris2.firstName) // Chris
console.log(chris2.lastName) // Coyier

// example 3
function Human3 (firstName, lastName) {
    // Declares properties
    this.firstName = firstName
    this.lastName = lastName  
    // Declares methods
    this.sayHello = function () {
      console.log(`Hello, I'm ${firstName}`)
    }
    this.sayMyName = function (){
        console.log(`Hello, I'm ${firstName+" "+lastName}`)
    }
  }
  
  const chris3 = new Human3('Chris', 'Coyier');
  console.log(chris3);
  console.log(chris3.sayHello());
  console.log(chris3.sayMyName());
  console.log(chris3.firstName);
  console.log(chris3.lastName);

  // Prototipo
  function Human4 (firstName, lastName) {
    this.firstName = firstName
    this.lastname = lastName
  }
  
  // Declaring method on a prototype
  Human4.prototype.sayHello = function () {
    console.log(`Hello, I'm ${this.firstName}`)
  }

  const human4=new Human4("Juan ", "Valdes");
  console.log(human4);


  