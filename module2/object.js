var table = {
    legs: 3,
    color: "brown",
    priceUSD: 100,
}

const user ={
    name:"Camila",
    nit: 124656,
    hobbies: "watch tv",
    password:"123%.*"
}
console.log(table);
console.log(user);
console.log("name ", user.name, "hobbies ",user.hobbies);

// other object
var house = {
    rooms: 3,
    color: "brown",
    priceUSD: 10000
}
console.log(house);
house.windows=5;
console.log(house);
console.log("valor de la casa ", house.priceUSD, "");
// asignacion valores a un objeto
var house2 = {};
house2.rooms = 4;
house2.color = "pink";
house2.priceUSD = 12345;
console.log("color casa 2",house2.color);
console.log("Habitaciones ",house2.rooms);
// cambiar valores a una propiedad del objeto
house.windows = 7;
console.log("Datos casa:", house);
// notacion punto. (.)
var house2 = {};
house2["rooms"] = 4;
house2['color']= "pink";
house2["priceUSD"] = 54321;
console.log(house2); // {rooms: 4, color: 'pink', priceUSD: 12345}
// other example
var car = {};
car.color = "red";
car["color"] = "green"; //crea una porpiedad en car, llamada color
car["speed"] = 200;
car.speed = 100; // modifica la propiedad speed
console.log(car); // {color: "green", speed: 100}
//
car["number of doors"] = 4;
console.log(car); // {color: 'green', speed: 100, number of doors: 5}
//
car["2022"] = 1901;
console.log(car); // {2022: 1901, color: 'green', speed: 100, number of doors: 5}
//
// arrays
var arrOfKeys = ['speed', 'altitude', 'color'];
var drone = {
    speed: 100,
    altitude: 200,
    color: "red"
}
console.log("object drone");
for (var i = 0; i < arrOfKeys.length; i++) {
    console.log(arrOfKeys[i]," = ",drone[arrOfKeys[i]])
}
//



