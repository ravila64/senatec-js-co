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
car.other_function=()=>{
    return "Esta es la function 3";
}

// funcion en el return con + de 1 linea
car.other_f4 = () =>{
    return(
        <>
        console.log("Linea 1 func 4");
        var x="Linea 2 function 4";
        console.log(x);
        </>
    );
}

car.mileage = 98765;
car.color = "red";
console.log(car);
//ejecutar lña function
console.log(car.turnKey());
car.lightsOn();
// llamado a otra funcion
console.log("example function 3 ", car.other_function());
// llamado de function 4, con mas de una linea de codigo
console.log(car.other_f4());

