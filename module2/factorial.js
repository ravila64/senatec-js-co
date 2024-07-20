const factorial = function fac(n) {
    return n < 2 ? 1 : n * fac(n - 1);
  };
  
  for (let index = 1; index <= 10; index++) {
      console.log("factorial de ",index, "es ", factorial(index));
  }
