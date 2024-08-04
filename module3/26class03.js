function Car () {
    let fuel = 50 ;
  
    return {
      get fuel () { 
        return fuel; 
      },
  
      set fuel (value) {
        fuel = value; 
        if (value > 100) fuel = 100;
      }
    }
  }
  
  const car = new Car()
  console.log(car.fuel) // 50
  
  car.fuel = 3000
  console.log(car.fuel) // 100
