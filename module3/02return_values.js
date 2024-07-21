console.log('Hello');

function doubleIt(num) {
    return num * 2;
}
console.log(doubleIt(4));
//Ahora codificaré otra función que construye un objeto con un valor específico:
function objectMaker(val) {
    return {
        prop: val
    }
}
console.log(objectMaker(100));
//
console.log(doubleIt(10).toString());
//
console.log(objectMaker( doubleIt(100)));
//
