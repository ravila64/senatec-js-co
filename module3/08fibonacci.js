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
console.log([1, 2, 3].filter(filterEven));  
// [2]

const double = x => 2 * x;  
var res=[1, 2, 3].map(double);  
console.log(res);
// [2, 4, 6]
