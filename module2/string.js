// primitive string
const s1 = "2 + 2"; // creates a string primitive
const s2 = new String("2 + 2"); // creates a String object
console.log(eval(s1)); // returns the number 4
console.log(eval(s2)); // returns the string "2 + 2"
// valueOf, eval
console.log(eval(s2.valueOf())); // returns the number 4
// split
let texto = "Hola mundo, ¿cómo estás?";
let palabras = texto.split(" ");
console.log(palabras);
// Salida: ["Hola", "mundo,", "¿cómo", "estás?"]
