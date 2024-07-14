// Tarea 1: Uso del operador lógico &&
var score=8;
console.log("Mid-level skills:", score>0 && score <=10);
// Tarea 2: Uso del operador lógico ||
var timeRemaining=0;
var energy = 10;
console.log( "Game over: " , timeRemaining == 0 || energy == 0);
//
// Tarea 3: Usando el operador de módulo, %, para probar si un número dado es impar
var num1=2;
var num2=5;
var test1 = num1 % 2;
var test2 = num2 % 2;
var result1 = (test1 == 0);
//console.log(test1);
//console.log(test2);
//console.log(result1);
console.log("Is ", num1, " an even number?", result1);
var result2 = (test2 == 0);
console.log( "Is ", num2, " an even number?", result2);
//
//Tarea 4: Agregue números usando el operador +
var num1=5;
var num2=10;
console.log("Suma de 5 + 10, es: ",num1+num2);
//
//Tarea 5: Concatene números y cadenas usando el operador +
var now="Now In ";
var three=3;
var d="¡D!";
console.log("resultado concatenar ", now+three+d);
console.log("resultado concatenar "+now+three+d);
//
//Tarea 6: Use el operador += para acumular valores en una variable
var counter = 0;
counter +=5;
counter +=3;
console.log("resultado ", counter);
