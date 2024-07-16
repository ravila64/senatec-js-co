// conclusiones en arrgelos, push = colocar elementos al final
// pop, eliminar elemento del final.

var fruits = [];
fruits.push("apple"); // ['apple']
fruits.push('pear'); // ['apple', 'pear']
console.log(fruits);
// eliminar ult elemento
fruits.pop();
console.log(fruits); // ['apple']
// Si vinculamos algunas lecciones anteriores de este curso, 
// ahora puedo crear una función que toma todos sus argumentos 
// y los inserta en una matriz, como esta: 
function arrayBuilder(one, two, three) {
    //var arr = [];
    arr.push(one);
    arr.push(two);
    arr.push(three);
    console.log(arr);
}
// call function
var arr= [];
arrayBuilder("Cafe","Aceite","Panela");
arr.push("Azucar");
console.log(arr);

// retornar un arregñp creado
function arrayBuilder2(one, two, three) {
    var arr = [];
    arr.push(one);
    arr.push(two);
    arr.push(three);
    return arr;
}
var matriz=arrayBuilder2('apple', 'pear', 'plum'); 
console.log("matriz",matriz);
var simpleArr = arrayBuilder2('apple 2', 'pear 2', 'plum 2');
console.log("simple array " ,simpleArr);
//

