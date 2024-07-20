// point 1
var result = null;
console.log(result);
// point 2

try {
  console.log("Hello");
} catch (err) {
  console.log("Goodbye");
}
// p.4
var x;
if (x === null) {
  console.log("null");
} else if (x === undefined) {
  console.log("undefined");
} else {
  console.log("ok");
}
// p-5 - arreglo con try-catch
try {
  throw new Error();
} catch (error) {
  console.log("Hello");
}
// asi imprime hello, con try-catch
// asi estaba originalmente
// throw new Error();
// console.log("Hello");

