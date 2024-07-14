// Ejercicio 1
// En este ejercicio, creará el código para un bucle forutilizando la variable de contador denominada i a partir de 1.
// Para hacer que el contador se incremente en 1 en cada bucle, usará i++.
// La condición de salida para el bucle for es i<=10.
// Dentro del bucle, escriba una declaración if-else, que verificará las siguientes condiciones:

// 1.	Primero, comprobará si el valor de i es 1. Si es así, su código registrará en la consola la cadena “Gold medal”.
// 2.	A continuación, comprobaré si el valor de i es 2. Si es así, su código registrará en la consola la cadena “Silver medal”.
// 3.	Luego, su código verificará si el valor de i es 3. Si es así, registrará en la consola la cadena “Bronze medal”.
// 4.	Para todos los valores restantes de i, su código registrará en la consola solo el valor de i.
// Nota: El registro de la consola esperado de todo el código debería ser el siguiente. Gold medal Silver medal Bronze medal

for (let index = 1; index <= 10; index++) {
  if (index == 1) {
    console.log("Golden medal");
  } else if (index == 2) {
    console.log("Silver medal");
  } else if (index == 3) {
    console.log("Bronze medal");
  } else {
    console.log("valor de i", index);
  }
}

// mismo caso con switch

for (let index = 1; index <= 10; index++) {
  switch (index) {
    case 1:
      console.log("Golden medal");
      break;
    case 2:
      console.log("Silver medal");
      break;
    case 3:
      console.log("Bronze medal");
      break;
    default:
      console.log("valor de index", index);  
      break;
  }
}


