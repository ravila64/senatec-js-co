var car = {};
car.color = "red";

// car.turnKey = function(){
//     console.log("object car, turnKey");
// }
car.turnKey = function(){
    return "object car, turnKey";
}
car.lightsOn = function() {
    console.log("The lights are on.")
}

car.mileage = 98765;
car.color = "red";
console.log(car);
//ejecutar lña function
console.log(car.turnKey());
car.lightsOn();

