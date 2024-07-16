// JavaScript tiene prácticos objetos incorporados. Uno de estos populares objetos integrados es el objeto Math.
// Al final de esta lectura, usted podrá:
// •	Resumir las propiedades y los métodos integrados del objeto Math.
// Constantes numéricas
// Estas son algunas de las constantes numéricas integradas que existen en el objeto Math: 
// •	El número PI: Math.PI 
// •	La constante de Euler: Math.E 
// •	El logaritmo natural de 2: Math.LN2
// Constantes numéricas
console.log("Numero pi ", Math.PI);
console.log("Numero de euler ", Math.E);
console.log("Logaritmo natural de 2 = ", Math.LN2);
var x= Math.SQRT2;
console.log("valor de SQRT2 ",x);

// Métodos de redondeo
// Estos incluyen: 
// •	 Math.ceil(): redondea hacia arriba al entero más cercano 
// •	 Math.floor(): redondea hacia abajo al entero más cercano 
// •	 Math.round(): redondea hacia arriba al entero más cercano si el decimal es 0,5 o superior; de lo contrario, redondea hacia abajo al entero más cercano 
// •	 Math.trunc(): recorta el decimal y deja solo el 
// metodos de redondeo

console.log("Redondear por arriba 5.87 ", Math.ceil(5.87));
console.log("Redondear hacia abajo 5.87 ", Math.floor(5.87));
console.log("Redondeo normal de 5.87 ", Math.round(5.87));
console.log("Redondeo normal de 5.25 ", Math.round(5.25));
console.log("Truncar un decimal 5.99  ", Math.trunc(5.99));

// Métodos aritméticos y de cálculo
// Aquí hay una lista no exhaustiva de algunos métodos aritméticos y de cálculo comunes que existen en el objeto Math: 
// •	Math.pow(2,3): calcula el número 2a la potencia de 3, el resultado es 8 
// •	Math.sqrt(16): calcula la raíz cuadrada de 16, el resultado es 4 
// •	Math.cbrt(8): encuentra la raíz cúbica de 8, el resultado es 2 
// •	Math.abs(-10): devuelve el valor absoluto, el resultado es 10 
// •	Métodos logarítmicos: Math.log(), Math.log2(), Math.log10() 
// •	Devuelve los valores mínimo y máximo de todas las entradas: 
//      Math.min(9,8,7) devuelve 7, Math.max(9,8,7) devuelve 9.
// •	Métodos trigonométricos: Math.sin(), Math.cos(), Math.tan(), etc.

console.log("Calcula potencias x elevado a la y ej: 2 a la 3 =>", Math.pow(2,3));
console.log("Calcula raiz cuadrada  de x, ej:16  ", Math.sqrt(16));
console.log("Calcula raiz cubica de x ej:8  ", Math.cbrt(8));
console.log("Devuelve vr absoluto de -x ", Math.abs(-20));
console.log("Logaritmo de 100 en base 10", Math.log(100));
console.log("Minimo de n numeros 10 2 25 ", Math.min(10,2, 25) );
console.log("Maximo de n numeros 4 89 7 -100 ", Math.max(4,89,75,-100) );
console.log("Seno de 90 gr ", Math.sin(90));
console.log("Seno de 45 gr ", Math.sin(45));
//


