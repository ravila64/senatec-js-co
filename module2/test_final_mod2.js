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
