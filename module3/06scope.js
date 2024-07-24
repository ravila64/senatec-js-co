let color='red';
if (color=='red'){
    color='blue';
}
console.log(color);

// global scope
let num1=10;
var num2=20;
const num3=90;
if (num2>=20){
    const num1=50;
    let num2=30;
    //var num3=110;
    console.log("Dentro del if, num1 ",num1 );
    console.log("Dentro del if, num2 ",num2 );
    console.log("Dentro del if, num2 ",num3 );

    //num1=45;
    num2=60;
    console.log("despues de asignar num1 y num2, dentro if");
    console.log("Dentro del if, num1 ",num1 );
    console.log("Dentro del if, num2 ",num2 );
}
// print global variables 
console.log("Numero 1",num1);
console.log("Numero 2",num2);
