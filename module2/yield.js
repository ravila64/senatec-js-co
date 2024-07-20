// pausar la ejecucion de una function
function* contador() {
    let i = 0;
    while (true) {
      yield i++;
    }
  }
  
  const generador = contador();
  
  console.log(generador.next().value); // 0
  console.log(generador.next().value); // 1
  console.log(generador.next().value); // 2

//   Las funciones generadoras y yield son útiles para trabajar con secuencias 
//   de valores, iteradores y flujos de datos que no se quieren o no se pueden 
//   calcular todos de una vez.
