// Task 1
function logDairy() {
    var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake'];
    for (key of dairy) {
        console.log(key);
    }
}
logDairy();

// Task 2
function birdCan() {
    const animal = {
        canJump: true
    };
    const bird = Object.create(animal);
    bird.canFly = true;
    bird.hasFeathers = true;

    var properties = Object.entries(bird);
    for (prop of properties) {
        console.log(prop[0],": ",prop[1]);
    }
}
birdCan();

// Task 3
function animalCan() {
  const animal = {
        canJump: true
  };
  const bird = Object.create(animal);
  bird.canFly = true;
  bird.hasFeathers = true;

  for (const llave in bird) {
    if (bird.hasOwnProperty(llave)) {
        console.log(`${llave}: ${bird[llave]}`);
    }
  }  

  for (const llave in animal) {
    if (animal.hasOwnProperty(llave)) {
        console.log(`${llave}: ${animal[llave]}`);
    }
  }  
}
animalCan();
