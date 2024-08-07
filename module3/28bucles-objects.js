const car = {
    speed: 100,
    color: "blue",
    cost:1500
}

// muestra un error ya que el objeto no es  iterable
// for(prop for car) {
//     console.log(prop);
//     console.log(prop.color, prop.speed, prop.cost);
// }

const colors = ['red','orange','yellow'];
for (var color of colors) {
    console.log(color);
}

// example 2
const car2 = {
    speed: 200,
    color: "red"
}
console.log(Object.keys(car2)); // ['speed','color']
//example 3
const car3 = {
    speed: 300,
    color: "yellow"
}
console.log(Object.values(car3)); // [300, 'yellow']
// example 4
const car4 = {
    speed: 400,
    color: 'magenta'
}
console.log(Object.entries(car4));

// example 5
var clothingItem = {
    price: 50,
    color: 'beige',
    material: 'cotton',
    season: 'autumn'
}

for( key of Object.keys(clothingItem) ) {
    console.log(key, ":", clothingItem[key])
}
//



