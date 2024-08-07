const car={
    engine: true,
    steering: true,
    speed:"slow"
}

const sportsCar=Object.create(car);
sportsCar.speed="fast";
console.log("The sportsCar object ",sportsCar);
console.log("the sportsCar is unreliable-no confiable");
for(prop in sportsCar){
    console.log(prop);
}
console.log("Iterating over object AND its prototype");
console.log("for in is reliable-confiable");
for (prop of Object.keys(sportsCar)){
    console.log(prop+" : "+sportsCar[prop]);
}
console.log("Iterating over object OWN PROPERTIES only");
