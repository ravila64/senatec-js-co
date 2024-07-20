//1
var x = {};
console.log(typeof x);
//2
try {
  console.log("hello");
} catch (e) {
  console.log("caught");
}
//3
var burger = ["bun", "beef", "lettuce", "tomato sauce", "onion", "bun"];
console.log(burger[2]);
//4
var bicycle = {
  wheels: 2,
  start: function () {},
  stop: function () {}
};
// r- funcion con 2 metodos
//5
try {
  throw new Error();
} catch (err) {
  console.log("Goodbye");
}
// 7

function add(a, b) {
  console.log(a + b);
}
add(3, "4");
//8
var result;
console.log(result);
//9
var str = "Hello";
var res = str.match("jello");
console.log(res); // esta linea no estaba en la pregunta
// 10
try {
  Number(5).toPrecision(300);
} catch (e) {
  console.log("There was an error");
}
// pruebas finales
try {
  throw new TypeError("oops");
} catch ({ name, message }) {
  console.log(name); // "TypeError"
  console.log(message); // "oops"
}
// other example
function isValidJSON(text) {
  try {
    JSON.parse(text);
    return true;
  } catch {
    return false;
  }
}
// other with try-catch
try {
  myroutine(); // may throw three types of exceptions
} catch (e) {
  if (e instanceof TypeError) {
    // statements to handle TypeError exceptions
  } else if (e instanceof RangeError) {
    // statements to handle RangeError exceptions
  } else if (e instanceof EvalError) {
    // statements to handle EvalError exceptions
  } else {
    // statements to handle any unspecified exceptions
    logMyErrors(e); // pass exception object to error handler
  }
}
// nested try-catch
try {
  try {
    throw new Error("oops");
  } finally {
    console.log("finally");
  }
} catch (ex) {
  console.error("outer", ex.message);
}
// other example 2
try {
  try {
    throw new Error("oops");
  } catch (ex) {
    console.error("inner", ex.message);
    throw ex;
  } finally {
    console.log("finally");
  }
} catch (ex) {
  console.error("outer", ex.message);
}
// MANEJO DE ERRORES EN ITERABLES
try {
  for (const value of iterable) {
    // ...
  }
} catch (e) {
  // Handle the error
}
//




