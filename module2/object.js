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
car["color"] = "green";
car["speed"] = 200;
car.speed = 100;
console.log(car); // {color: "green", speed: 100}
//


