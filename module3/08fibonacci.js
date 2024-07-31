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


