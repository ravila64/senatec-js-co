// using tyeof
var test=typeof("what is this?");
console.log(test);
test=typeof(10);
console.log(test);
test=typeof(3.1416);
console.log(test);
test=typeof(true);
console.log(test);
test=typeof([1,2,3]);
console.log(test);
test=typeof({'cedula':12025,'nombre':'Juan'});test=typeof({'cedula':12025,'nombre':'Juan'});
console.log(test);
test=typeof(function abc(){console.log("abc");});
console.log(test);
test=typeof(null);
console.log(test);

//
var result = "Hello".indexOf('l');
console.log(result);
//
var clothes = [];
  clothes.push('gray t-shirt');
  clothes.push('green scarf');
  clothes.pop();
  clothes.push('slippers');
  clothes.pop();
  clothes.push('boots');
  clothes.push('old jeans');
console.log(clothes.length);
//
var food = [];
  food.push('Chocolate');
  food.push('Ice cream');
  food.push('Donut');
  console.log(food[1])
  
  // funciones de objeto Math
  console.log("Numero aleatorio ",Math.random()*100);
  console.log("Numero redondeado ", Math.round(3.1416));
  console.log("raiz cuadrada ",Math.sqrt(9.0));
  
