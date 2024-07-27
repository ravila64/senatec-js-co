function getDistance(mph, h) {
  return mph * h;
}
var mph = 60;
var h = 2;
var distance = getDistance(mph, h);

console.log(distance); // <====== THIS HERE!
//

var globalVar = 77;
function scopeTest() {
  var localVar = 88;
  console.log("que imprimr ", localVar);
}
//console.log("que imprimr ", localVar);

const y=10;
//y=15;
console.log(y);

//
function meal(animal) {
    animal.food = animal.food + 10;
}

var dog = {
    food: 10
};
meal(dog);
meal(dog);
console.log(dog.food);
//
function two() {
    return 2;
}

function one() {
    return 1;
}

function calculate(initialValue, incrementValue) {
    return initialValue() + incrementValue() + incrementValue();
}

console.log(calculate(two, one));
