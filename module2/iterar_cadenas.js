var cadena="development";
console.log(cadena[0]);
console.log(cadena[1]);
console.log("-------------------------------");
for (let index = 0; index < cadena.length; index++) {
    const element = cadena[index];
    console.log(element);
}
//concatenar
var greet = 'Hello';
var user = "Lisa";
console.log(greet+" "+user);
//console.log(greet.pop());
//greet.pop();
console.log(greet.concat(" "+user).concat(" ¿Como estas?"));
//indexOf devuelve la ubicación de la primera posición que coincide con un carácter: 
console.log("hola mundo".indexOf('m'));  // pimera coincidencia
console.log("hola mundo".lastIndexOf('o'));  // ultima
// El método split corta la cadena en una matriz de subcadenas:
console.log("ho-ho-ho".split("-")); // ['ho', 'ho', 'ho']
// También hay algunos métodos para cambiar las mayúsculas y 
// minúsculas de las cadenas. Por ejemplo:  

console.log(greet.toUpperCase());   // mayus
console.log(greet.toLocaleLowerCase());  // minus
greet = greet.toUpperCase(); // "HELLO, "
var greet2 = greet.toLowerCase(); // "hello, "
console.log(greet);
console.log(greet2);

// Aquí hay una lista de todos los métodos abordados en esta hoja de características clave:

// charAt() 
// concat() 
// indexOf() 
// lastIndexOf() 
// split() 
// toUpperCase() 
// toLowerCase()  

