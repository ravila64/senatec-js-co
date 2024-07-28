const fibonacci = (n) => (n <= 2 ? 1 : fibonacci(n - 1) + fibonacci(n - 2));
console.log(fibonacci(10));

// otra forma

function fibo(n) {
  if (n <= 1) {
    console.log(n, " -> ");
    return n;
  }
  console.log(n-1, "   ",n-2);
  return fibo(n - 1) + fibo(n - 2);
}
console.log("res ", fibo(10));

// programacion funcional

const filterEven = x => x%2 === 0;  
console.log([1, 2, 3,4,5,6,7,8 ].filter(filterEven));  
// [2]

const potencia = x => 2 * x;  
var res=[1, 2, 3,4,5].map(potencia);  
console.log(res);
// [2, 4, 6, 87 1 1]

var arr=[10,20,30,40,50];
console.log("arreglo ",arr);
const divisionx2= y => y / 2;
var res = arr.map(divisionx2);
console.log("Division x 2 ",res);
//
function cubo(x){
  return (x*x*x);
}
//
var arr=[1,2,3,4,5];
var n=3;
console.log("Cubo de ",n, " es ",cubo(n));
const alCubo = n => n*n*n;
console.log(arr);
res = arr.map(alCubo);
console.log("Elementos de arr al cubo ", res);
//
