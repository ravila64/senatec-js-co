const bicycle = {
    bell: function() {
        return "Ring, ring! Watch out, please!"
    }
}
const door = {
    bell: function() {
        return "Ring, ring! Come here, please!"
    }
}

function ringTheBell(thing) {
    console.log(thing.bell())
}

console.log(bicycle.bell());
console.log(door.bell());
//
ringTheBell(bicycle);
ringTheBell(door);
//
// concatenar
console.log("Concatenar");
console.log("abc".concat("def")); // 'abcdef'
// concatena en 2 matrices
console.log(["abc"].concat(["def"]));
// con operador +
console.log(["abc"] + ["def"]);

// example
class Bird {
    useWings() {
        console.log("Flying!")
    }
}
class Eagle extends Bird {
    useWings() {
        super.useWings()
        console.log("Barely flapping!")
    }
}
class Penguin extends Bird {
    useWings() {
        console.log("Diving!")
    }
}
var bird = new Bird();
var baldEagle = new Eagle();
var kingPenguin = new Penguin();
console.log("Imprime class bird");
bird.useWings();
console.log("imprime class Eagle ");
baldEagle.useWings(); // "Flying! Barely flapping!"
console.log("imprime class Penguin ");
kingPenguin.useWings(); // "Diving!"
//

