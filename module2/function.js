function hello(){
    console.log("Hola mundo");
}
function mensaje(){
    console.log("Nuestra primera funcion");
}
function listArrayItems(arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log(i+1,arr[i])
    }
}
hello();
mensaje();
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink'];
listArrayItems(colors);
